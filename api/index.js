import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDb is Connected");
}).catch((err) => {
    console.log(err);
})


app.listen('4000', () => {
    console.log('Server is running on port 4000!');
})