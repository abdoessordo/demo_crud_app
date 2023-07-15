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
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: Number(process.env.DB_PORT) || 5432,
    DB_NAME: process.env.DB_NAME || "postgres",
    DB_USER: process.env.DB_USER || "postgres",
    DB_PASSWORD: process.env.DB_PASSWORD || "admin",
    DB_URL: process.env.DB_URL || "postgres://postgres:admin@localhost:5432/postgres",
};
