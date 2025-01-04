import express from "express";
const  orderRouter  = express.Router();
import { Order } from "../models/order.models.js";

// Create a new order
orderRouter.post('/addOrder', async (req, res) => {
    try {
        const { userId, productId, quantity, totalPrice } = req.body;

        if (!userId || !productId || quantity === undefined || totalPrice === undefined) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const newOrder = await Order.create({ userId, productId, quantity, totalPrice });
        res.status(201).json({
            message: "Order added successfully!",
            orderId: newOrder._id,
        });
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
        console.error("Error: ", err);
    }
});

// Get a single order by ID
orderRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Order ID is required." });
        }

        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found." });
        }

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
        console.error("Error: ", err);
    }
});

// Update an order
orderRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, productId, quantity, totalPrice } = req.body;

        if (!id) {
            return res.status(400).json({ message: "Order ID is required." });
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { userId, productId, quantity, totalPrice },
            { new: true, runValidators: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found." });
        }

        res.status(200).json({
            message: "Order updated successfully.",
            updatedOrder,
        });
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
        console.error("Error: ", err);
    }
});

// Delete an order
orderRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Order ID is required." });
        }

        const deletedOrder = await Order.findByIdAndDelete(id);

        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found." });
        }

        res.status(200).json({ message: "Order deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
        console.error("Error: ", err);
    }
});

// Get orders for a specific user
orderRouter.get('/user/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required." });
        }

        const userOrders = await Order.find({ userId }).sort({ createdAt: -1 });

        res.status(200).json(userOrders);
    } catch (err) {
        res.status(500).json({ message: `Error: ${err.message}` });
        console.error("Error: ", err);
    }
});

export default orderRouter ;
