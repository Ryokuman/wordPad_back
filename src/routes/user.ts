import { Router } from "express";
import { User } from "@models/user";
import { v4 } from "uuid";
import { makePw, checkPw } from "@utils/pwUtil";
import { UniqueConstraintError } from "sequelize";
import { sign } from "jsonwebtoken";
import { jwt } from "src/config/config";

const user = Router();

user.post("/signin", async (req, res) => {
  try {
    const result = await User.findOne({ where: { email: req.body.email } });

    if (result && (await checkPw(req.body.password, result.dataValues.password, result.dataValues.salt))) {
      const acToken = sign({ id: result.dataValues.id }, jwt.secret, {
        algorithm: jwt.algorithm,
        expiresIn: 60 * 60 + 24,
      });

      const rfToken = sign({ id: result.dataValues.id }, jwt.secret, {
        algorithm: jwt.algorithm,
        expiresIn: 60 * 60 + 24 * 14,
      });

      res.status(200).json({ acToken, rfToken });
    } else res.status(401).send("wrong value");
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
});

user.post("/signup", async (req, res) => {
  try {
    const uuid = v4();
    const { pw, salt } = (await makePw(req.body.password)) || {};
    const result = await User.create({ id: uuid, email: req.body.email, password: pw, salt: salt });
    console.log(result.dataValues);
    res.status(201).send("success");
  } catch (error) {
    if (error instanceof UniqueConstraintError) res.status(422).send(error.errors.map((e) => e.message).join("\n"));
    else res.send(error);
  }
});

export default user;
