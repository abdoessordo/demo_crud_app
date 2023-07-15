"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constatns_1 = require("./constatns");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const multer_1 = __importDefault(require("multer"));
const produit_route_1 = __importDefault(require("./produit.route"));
const whitlisted_1 = require("./whitlisted");
const app = (0, express_1.default)();
app.use("/api/uploads", express_1.default.static("uploads"));
const STORAGE = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});
const upload = (0, multer_1.default)({
    storage: STORAGE,
    fileFilter: (req, file, cb) => {
        console.log("mimetype: ", file.mimetype);
        if (file.mimetype == "image/png" ||
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg") {
            cb(null, true);
        }
        else {
            cb(null, false);
            return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
        }
    },
});
// Middlewares
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        if (whitlisted_1.allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// Routes
app.post("/api/product/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    return res.send(req.file);
});
app.use("/api/produit", produit_route_1.default);
// Server
app.listen(constatns_1.constants.PORT, () => {
    console.log(`listening on port: ${constatns_1.constants.PORT} ...`);
});
