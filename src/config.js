import dotenv from 'dotenv';
// preparamos nuestras variables de entorno y las hacemos accesibles a nuestra app.
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/mitodoapp'
}
