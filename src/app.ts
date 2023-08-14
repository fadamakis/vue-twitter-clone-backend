import express, { Express, Request, Response } from "express";
import connectDB from "./config/db"; 
import bodyParser from "body-parser";

const app: Express = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

import tweetRoute from "./routes/tweet.route";

app.use("/tweet", tweetRoute);

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

export default app;
