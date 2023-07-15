import { constants } from "./constatns";

import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import produitRoute from "./produit.route";
import { allowedOrigins } from "./whitlisted";

const app: Express = express();

// Middlewares
app.use(
  cors({
    origin: function (origin: any, callback: any) {
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/produit", produitRoute);

// Server
app.listen(constants.PORT, () => {
  console.log(`listening on port: ${constants.PORT} ...`);
});
