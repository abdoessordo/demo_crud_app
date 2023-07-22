"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constatns_1 = require("./constatns");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const produit_route_1 = __importDefault(require("./produit.route"));
const whitlisted_1 = require("./whitlisted");
const app = (0, express_1.default)();
// Middlewares;
app.use((0, cors_1.default)({ origin: whitlisted_1.allowedOrigins }));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use("/api/produit", produit_route_1.default);
app.use("/api/uploads", express_1.default.static("uploads"));
// Server
app.listen(constatns_1.constants.PORT, () => {
    console.log(`listening on port: ${constatns_1.constants.PORT} ...`);
});
