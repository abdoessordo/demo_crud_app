import { constants } from "./constatns";

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import produitRoute from "./produit.route";
import { allowedOrigins } from "./whitlisted";

const app: Express = express();

// Middlewares;
app.use(cors({ origin: allowedOrigins }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/produit", produitRoute);
app.use("/api/uploads", express.static("uploads"));

// Server
app.listen(constants.PORT, () => {
  console.log(`listening on port: ${constants.PORT} ...`);
});
