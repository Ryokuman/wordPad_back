import sequelize from "@utils/connect.js";
import User from "./user.js";

async function bulk() {
  await sequelize.sync({ force: true }); // sync 시작
}

export { User, bulk };
