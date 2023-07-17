import dotenv from "dotenv";
dotenv.config();

// GLOBAL CONSTANTS

interface IConstants {
  // server
  PORT: number;

  // database

  DB_URL: string;

  // CORS
  WHITE_LISTED_PORTS: Number[];
  WHITE_LISTED_HOSTS: string[];
}

export const constants: IConstants = {
  // server
  PORT: Number(process.env.PORT) || 3000,

  // database
  DB_URL:
    process.env.DB_URL || "postgres://postgres:admin@localhost:5432/postgres",

  // CORS
  WHITE_LISTED_PORTS: [3000, 4000, 5000, 5173],
  WHITE_LISTED_HOSTS: ["localhost", "127.0.0.1"],
};
