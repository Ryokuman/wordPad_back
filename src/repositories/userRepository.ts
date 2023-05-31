import { Op } from "sequelize";
import User from "@models/user";
import { v4 } from "uuid";

async function createUser(email: string, userID: string, password: string) {
  try {
    const uuid = v4();
    await User.create({ id: uuid, userID: userID, email: email, password: password });
    return "complete";
  } catch (error) {
    throw error;
  }
}

async function findByUserID(userID: string) {
  const result = await User.findAll({
    where: {
      userID: { [Op.eq]: userID },
    },
  });

  return result;
}

export default { findByUserID, createUser };
