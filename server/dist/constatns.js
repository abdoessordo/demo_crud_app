"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.constants = {
    // server
    PORT: Number(process.env.PORT) || 3000,
    // database
    DB_URL: process.env.DB_URL || "postgres://postgres:admin@localhost:5432/postgres",
    // CORS
    WHITE_LISTED_PORTS: [3000, 4000, 5000, 5173],
    WHITE_LISTED_HOSTS: ["localhost", "127.0.0.1"],
};
