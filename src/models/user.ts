import { Model, DataTypes } from "sequelize";
import { dbType } from "./index";
import { sequelize } from "./sequelize";

export class User extends Model {
  public readonly id!: string;
  public email!: string;
  public password!: string;
  public salt!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    modelName: "User",
    tableName: "User",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);

export const associate = (db: dbType) => {
  db.User.hasMany(db.Word, { as: "Words" });
};
