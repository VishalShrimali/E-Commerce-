import mongoose from "mongoose";
import { connectionDB } from "../DB";

// Establish database connection
connectionDB();

// Define order schema
const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String, // User ID as a simple string
            required: true, // User ID is mandatory
        },
        productId: {
            type: String, // Product ID as a simple string
            required: true, // Product ID is mandatory
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
