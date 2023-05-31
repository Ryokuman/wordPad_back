import { Router, Request, Response } from "express";
import userService from "@services/userService";

const user = Router();

user.post("/signup", async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;
    const result = await userService.signUp(email, password);
    res.status(201).json({ result: result });
  } catch (error) {
    res.send(error);
  }
});

user.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;
    const result = await userService.signIn(email, password);
    res.status(200).json(result);
  } catch (error) {
    res.send(error);
  }
});

export default user;
