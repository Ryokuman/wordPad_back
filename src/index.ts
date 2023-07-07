import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "@models/sequelize";
import router from "./app";
import config from "./config/config";

dotenv.config();

const port = Number(process.env.PORT);
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(port, async () => {
  console.log(`Server Listening on ${port}`);

  //sequelize-db connection test
  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection success");
    })
    .catch((e) => {
      console.log("TT : ", e);
      console.log(config);
    });
  await sequelize.sync(); // migration
});
