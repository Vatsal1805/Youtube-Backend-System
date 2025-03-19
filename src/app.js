import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';

dotenv.config();
const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

//routes declaration

app.use('/api/v1/users', userRouter);


export { app };