import wordService from "@services/wordService";
import { Router, Request, Response } from "express";

const word = Router();

word.get("", async (req: Request, res: Response) => {
  try {
    const uuid = req.query.id;
    if (typeof uuid !== "string") throw new Error("");
    const result = await wordService.getWordList(uuid);

    res.status(200).send(result);
  } catch {
    res.status(400).send("invalid Value");
  }
});

word.post("", async (req: Request, res: Response) => {
  const name: string = req.body.name;
  const meaning: string[] = req.body.meaning;
  const tags: string[] = req.body.tags;
  const owner: string = req.body.owner;

  const result = await wordService.addWord(name, meaning, tags, owner);
  res.status(200).send(result);
});

word.patch("", async (req: Request, res: Response) => {
  const uuid: string = req.body.uuid;
  const updateValue: updateWordValue = req.body.updValue;

  const result = await wordService.updateWord(uuid, updateValue);
  res.status(200).send(result);
});

word.delete("", async (req: Request, res: Response) => {
  const uuid: string = req.body.uuid;

  const result = await wordService.deleteWord(uuid);
  res.status(200).send(result);
});

export default word;
