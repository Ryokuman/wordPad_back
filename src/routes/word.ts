import { Router } from "express";
import { sign, verify } from "jsonwebtoken";

import { Word } from "@models/word";
import { jwt } from "@config/config";

type decodedType = { id: string; iat: number; exp: number };

const word = Router();

word.get("", async (req, res) => {
  try {
    if (req.headers.authorization)
      verify(req.headers.authorization, jwt.secret, async (err, decoded) => {
        const data = <decodedType>decoded;
        const words = await Word.findAll({ where: { owner: data.id } });
        res.send(words);
      });
  } catch (error) {
    res.send(error);
  }
});

export default word;
