import { constants } from "./constatns";

import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app: Express = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Server
app.listen(constants.PORT, () => {
  console.log(`listening on port: ${constants.PORT} ...`);
});
