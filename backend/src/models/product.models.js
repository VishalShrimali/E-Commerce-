import mongoose from "mongoose";
import connectionDB  from "../DB/index.js";

// Establish database connection
connectionDB();

// Define product schema
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true, // Product name is mandatory
           
        },
        price: {
            type: Number,
            required: true, // Price is mandatory
        },
        category: {
            type: String,
            required: true, // Category is mandatory
        },
        stock: {
            type: Number,
            default: 0, // Default stock value
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

// Export the Product model
export const Product = mongoose.model("Product", productSchema);
