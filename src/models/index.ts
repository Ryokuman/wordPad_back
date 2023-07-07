import { User, associate as associateUser } from "./user";
import { Word, associate as associateWord } from "./word";

export * from "./sequelize";
const db = {
  User,
  Word,
};

associateUser(db);
associateWord(db);

export type dbType = typeof db;
