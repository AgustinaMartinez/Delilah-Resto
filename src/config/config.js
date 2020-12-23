import dotenv from 'dotenv';

dotenv.config();

export const envVariables = {
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    port: process.env.PORT,
    retryWrites: process.env.DB_RETRY_WRITES,
    w: process.env.DB_W
}

const config = {
    JWT: {
        PRIVATE_KEY: 'secret',
        EXPIRES_TIME: 86400 //24 hours
    }
}

export default config;
