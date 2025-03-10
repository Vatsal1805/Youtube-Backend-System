import express from 'express';
import dotenv from 'dotenv';
import connectdb from './db/db.js';


dotenv.config();
const app = express();
connectdb().then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(error => console.error("database connection failed",error));
