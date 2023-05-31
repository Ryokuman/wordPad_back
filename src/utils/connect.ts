import { Sequelize } from "sequelize";
import { config } from "dotenv";

// db connecting
config();

const name = process.env.DB_NAME || "undefined";
const user = process.env.DB_USER || "undefined";
const pw = process.env.DB_PASSWORD || "undefined";
const host = process.env.DB_HOST || "undefined";
const port = Number(process.env.DB_PORT);

const sequelize = new Sequelize(name, user, pw, {
  host: host,
  port: port,
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
