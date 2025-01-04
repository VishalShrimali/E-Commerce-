import mongoose from "mongoose";
import  connectionDB  from "../DB/index.js";

// Establish database connection
connectionDB();

// Define order schema
const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the User model
            required: true,
        },
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", // Reference to the Product model
            required: true,
        },        
        quantity: {
            type: Number,
            required: true, // Quantity is mandatory
            default: 1, // Default quantity is 1
        },
        totalPrice: {
            type: Number,
            required: true, // Total price is mandatory
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Export the Order model
export const Order = mongoose.model("Order", orderSchema);
