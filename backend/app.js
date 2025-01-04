import express from "express";
import dotenv from "dotenv";
import userRouter from './src/routes/userRouter.js';
import productRouter from "./src/routes/productRouter.js";
import orderRouter from "./src/routes/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/order', orderRouter)
const port = process.env.port || 3000

app.listen(port, () => {
    console.log(`\n Server is running on : ${port}`);
    
})