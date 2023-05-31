import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";

// These are all the attributes in the Word model
interface WordAttributes {
  id: string;
  name: string;
  meaning: string[];
  tags: string[];
}

export class Word extends Model<WordAttributes> {
  public id!: string;
  public name!: string;
  public meaning!: string;
  public tags!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Word.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    meaning: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    modelName: "Word",
    tableName: "Word",
    sequelize,
    freezeTableName: true,
    timestamps: true,
    updatedAt: "updateTimestamp",
  }
);
