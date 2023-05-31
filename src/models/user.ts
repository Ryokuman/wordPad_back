import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

// These are all the attributes in the User model
interface UsersAttributes {
  email: string;
  password: string | null;
}

export class Users extends Model<UsersAttributes> {
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Users.init(
  {
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    modelName: "Users",
    tableName: "Users",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);
