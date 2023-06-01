import { Op } from "sequelize";
import { Word } from "@models/word";
import { v4 } from "uuid";

async function createWord(name: string, meaning: string[], tags: string[], owner: string) {
  try {
    const uuid = v4();
    await Word.create({ id: uuid, name: name, meaning: meaning, tags: tags, owner: owner });
    return "complete";
  } catch (error) {
    throw error;
  }
}

async function findByOwner(uuid: string) {
  try {
    const result = await Word.findAll({
      where: {
        owner: { [Op.eq]: uuid },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
}

async function findWordById(uuid: string) {
  try {
    const result = await Word.findOne({
      where: {
        id: { [Op.eq]: uuid },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
}

async function updateWord(uuid: string, updateValue: updateWordValue) {
  try {
    await Word.update(updateValue, { where: { id: uuid } });
    return "complete";
  } catch (error) {
    throw error;
  }
}

async function deleteWord(uuid: string) {
  try {
    await Word.destroy({
      where: {
        id: uuid,
      },
    });
    return "complete";
  } catch (error) {
    throw error;
  }
}

export default { createWord, findByOwner, findWordById, updateWord, deleteWord };
