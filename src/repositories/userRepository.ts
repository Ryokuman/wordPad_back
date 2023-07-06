import { Op } from "sequelize";
import { User } from "@models/user";
import { v4 } from "uuid";

async function createUser(email: string, password: string) {
  try {
    const uuid = v4();
    await User.create({ userId: uuid, email: email, password: password });
    return "complete";
  } catch (error) {
    throw error;
  }
}

async function findByEmail(email: string) {
  const result = await User.findAll({
    where: {
      email: { [Op.eq]: email },
    },
  });

  return result;
}

export default { findByEmail, createUser };
