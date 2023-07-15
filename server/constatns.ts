import dotenv from 'dotenv';
dotenv.config();

// GLOBAL CONSTANTS

interface IConstants {
    PORT: number;
}

export const constants: IConstants = {
    PORT: Number(process.env.PORT) || 3000,
};