import dotenv from "dotenv";
dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME || "undefined",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME || "undefined",
    host: process.env.DB_HOST || "undefined",
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
  },
};

export default config;
