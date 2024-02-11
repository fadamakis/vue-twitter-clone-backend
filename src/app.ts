import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db";
import errorHandler from "./middlewares/errorHandler";
import auth from "./middlewares/auth";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use(auth);

connectDB();

import { tweets } from "./features/tweets";
import { users } from "./features/users";
import { notifications } from "./features/notifications";
import { search } from "./features/search";

app.use("/tweets", tweets);
app.use("/users", users);
app.use("/notifications", notifications);
app.use("/search", search);

app.use(errorHandler);

app.get("/", (_: Request, res: Response) => {
  res.send("Express + TypeScript Server!");
});

export default app;
