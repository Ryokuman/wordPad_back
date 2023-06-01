import wordRepository from "@repositories/wordRepository";

async function addWord(name: string, meaning: string[], tags: string[], owner: string) {
  try {
    const result = await wordRepository.createWord(name, meaning, tags, owner);
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteWord(uuid: string) {
  try {
    const word = await wordRepository.findWordById(uuid);
    if (word !== null) {
      await wordRepository.deleteWord(uuid);
      return "complete";
    } else throw new Error("word is not exist");
  } catch (error) {
    throw error;
  }
}

async function updateWord(uuid: string, updateValue: updateWordValue) {
  try {
    const word = await wordRepository.findWordById(uuid);
    if (word !== null) {
      wordRepository.updateWord(uuid, updateValue);
    } else throw new Error("word is not exist");
  } catch (error) {
    throw error;
  }
}

async function getWordList(owner: string) {
  try {
    const result = await wordRepository.findByOwner(owner);
    return result;
  } catch (error) {
    throw error;
  }
}

export default { addWord, deleteWord, updateWord, getWordList };
