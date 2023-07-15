import { constants } from "./constatns";

import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";

import produitRoute from "./produit.route";
import { allowedOrigins } from "./whitlisted";

const app: Express = express();
app.use("/api/uploads", express.static("uploads"));

const STORAGE = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: STORAGE,

  fileFilter: (req, file, cb) => {
    console.log("mimetype: ", file.mimetype);
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

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
app.post(
  "/api/product/upload",
  upload.single("image"),
  (req: Request, res: Response) => {
    console.log(req.file);
    return res.send(req.file);
  }
);
app.use("/api/produit", produitRoute);

// Server
app.listen(constants.PORT, () => {
  console.log(`listening on port: ${constants.PORT} ...`);
});
