import express from 'express';
import { Product } from '../models/product.models.js';
const productRouter = express.Router();

productRouter.get('/checkproduct/:id', async (req, res)=> {
    try{
        const { id } = req.params;
        if(!id) console.log("Product is Not Found.");
        else{
           const checkProduct = await Product.findById( id );
           res.status(201).json({
            checkProduct
           })
        }
    }
    catch (err) {
        res.status(500).json({
            message: `Error occurred: ${err.message}`
        });
        console.error("Error: ", err);
    }

})
productRouter.post('/addProduct', async (req, res)=> {
    try{
        const { name, price, stock, category } = req.body;
        const addProduct = await Product.create({ name, price, stock, category });
        res.status(201).json({
        message: "Product added Successfully!!!",
        id : addProduct._id
       })
    }
    catch(err){
        res.status(404).json({
            message: "There is an error!!!"
        })
        console.log("Error: ", err);
        
    }
})
productRouter.put('/updateProduct/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {name, price, stock, category } = req.body; // Extract from req.body

        if (!id) {
            return res.status(400).json({ message: "Product ID is required." });
        }

        // Find user and update
        const updateProduct = await Product.findByIdAndUpdate(
            id, 
            { name, price, stock, category },
            { new: true }  // Return the updated user
        );

        res.status(201).json({
            message: "Product Updated Successfully.",
            updateProduct: updateProduct
        });

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
productRouter.delete('/removeProduct/:id', async (req, res)=> {
    try{
        const { id } = req.params;
        if(!id) console.log("No Product found");
        else{
            const deleterProduct = await Product.findByIdAndDelete(id);
            res.status(200).json({
                message: "Product deleted Successfully.",
                
            });
        }
    }
    catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default productRouter