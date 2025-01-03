// Database connection code
import mongoose from "mongoose";
import dotenv from "dotenv";
import DB_NAME from "../constant.js";
dotenv.config();

const connectionDB = async () => {
    try{
        const checkConnection  = await mongoose.connect(`${process.env.mongoDB_URI}/${DB_NAME}`);
        console.log('Database is connected!!!');
    }
    catch(err){
        console.log("There is an error: ", err);
    }
}

export default connectionDB