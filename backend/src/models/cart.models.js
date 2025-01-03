import mongoose from "mongoose";
import { connectionDB } from "../DB";

// Establish database connection
connectionDB();

// Define cart schema
const cartSchema = new mongoose.Schema(
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
            type: Number, // Number of items in the cart
            required: true, // Quantity is mandatory
            default: 1, // Default quantity is 1
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Export the Cart model
export const Cart = mongoose.model("Cart", cartSchema);
