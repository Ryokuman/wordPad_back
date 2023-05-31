import { DataTypes } from "sequelize";
import sequelize from "@utils/connect.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

export default User;
