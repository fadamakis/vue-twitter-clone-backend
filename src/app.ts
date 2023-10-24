import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import connectDB from "./config/db";

const app: Express = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

import { tweet } from "./features/tweet";
import { profile } from "./features/profile";

app.use("/tweet", tweet);
app.use("/profile", profile);

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

export default app;
