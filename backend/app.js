import express from "express";
import dotenv from "dotenv";
import userRouter from './src/routes/userRouter.js';
import productRouter from "./src/routes/productRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`\n Server is running on : ${port}`);
    
})