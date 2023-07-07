import { Sequelize } from "sequelize";
import config from "../config/config";

const { database, username, password, host, dialect } = config;
const sequelize = new Sequelize(database, username, password, { host: host, dialect: dialect });

export { sequelize };
export default sequelize;
