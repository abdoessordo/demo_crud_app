import dotenv from "dotenv";
dotenv.config();

// GLOBAL CONSTANTS

interface IConstants {
  // server
  PORT: number;

  // database
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_URL: string;
}

export const constants: IConstants = {
  // server
  PORT: Number(process.env.PORT) || 3000,

  // database
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_NAME: process.env.DB_NAME || "postgres",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "admin",
  DB_URL:
    process.env.DB_URL || "postgres://postgres:admin@localhost:5432/postgres",
};
