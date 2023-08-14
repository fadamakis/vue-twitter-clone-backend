import express, { Express, Request, Response } from "express";

const app: Express = express();

import tweetRoute from "./routes/tweet.route";

app.use("/tweet", tweetRoute);

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

export default app;
