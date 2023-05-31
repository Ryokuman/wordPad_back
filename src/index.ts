import express, { Request, Response } from "express";
import route from "@routes/route";

const port = route;
const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => res.send("server is running with " + port));

app.listen(port);
