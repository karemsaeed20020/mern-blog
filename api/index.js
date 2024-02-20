import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from '../api/routes/user.route.js'
dotenv.config();

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDb is Connected");
}).catch((err) => {
    console.log(err);
})


app.listen('4000', () => {
    console.log('Server is running on port 4000!');
})

app.use('/api/user', userRoutes)