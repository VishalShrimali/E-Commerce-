import mongoose from "mongoose";
import  connectionDB  from "../DB/index.js";

connectionDB()

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address : {
            type: String,
            required: true
        }

    },
    {timestamps: true});


export const User = mongoose.model('User', userSchema);
