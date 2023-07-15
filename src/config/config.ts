import dotenv from "dotenv";
import { Algorithm, Secret } from "jsonwebtoken";
import { Dialect } from "sequelize";
dotenv.config();

type IJwt = {
  algorithm: Algorithm;
  secret: Secret;
};

type Iconfig = {
  username: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  dialect: Dialect;
};

const config: Iconfig = {
  username: process.env.DB_USERNAME || "undefined",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME || "undefined",
  host: process.env.DB_HOST || "undefined",
  port: Number(process.env.DB_PORT),
  dialect: "postgres",
};

const jwt: IJwt = {
  algorithm: "HS256",
  secret: process.env.JWT_SECRET || "undefined",
};

export default config;
export { jwt };
