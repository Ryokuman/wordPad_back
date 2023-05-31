import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import { Word } from "./word";

// These are all the attributes in the User model
interface UserAttributes {
  id: string;
  email: string;
  password: string | null;
}

export class User extends Model<UserAttributes> {
  public readonly id!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
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

User.hasMany(Word, {
  sourceKey: "id",
  foreignKey: "owner",
  as: "userHasManyScores",
});
