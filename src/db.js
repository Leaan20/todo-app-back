import mongoose from "mongoose";
import { config } from './config.js';

const { dbUrl } = config;

if (!dbUrl) {
    throw new Error("La variable dbUrl no está definida");
}

class DB {
    constructor() {
        this.connect()
    };

    async connect() {
        try {
            const response = await mongoose.connect(dbUrl);
            if (response) return console.log('Db conectada');
            
        } catch (error) {
            throw new Error("No pudo conectarse correctamente", error);
            
        }

    }
}

export const ConnectDB = new DB();