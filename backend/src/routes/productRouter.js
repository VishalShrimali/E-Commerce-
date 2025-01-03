import express from 'express';
import { Product } from '../models/product.models.js';
const productRouter = express.Router();

productRouter.get('/profile/:id', async (req, res)=> {
    try{
        const { id } = req.params;
        if(!id) console.log("User Not Found.");
        else{
           const userProfile = await User.findById(id);
           res.status(201).json({
            userProfile
           })
        }
    }
    catch(error){
       res.status(404).json({
        message: `Error is : ${error}`
       })
        
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
    catch(error){
        res.status(404).json({
            message: "There is an error!!!"
        })
        console.log("Error: ", error);
        
    }
})
productRouter.post('/signin', async (req, res)=> {
})
productRouter.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, phone, address } = req.body; // Extract from req.body

        if (!id) {
            return res.status(400).json({ message: "User ID is required." });
        }

        // Find user and update
        const updateUser = await User.findByIdAndUpdate(
            id, 
            { name, email, password, phone, address },
            { new: true }  // Return the updated user
        );

        // If no user found
        if (!updateUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({
            message: "User Updated Successfully.",
            updatedUser: updateUser
        });

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
productRouter.delete('/logout/:id', async (req, res)=> {
    try{
        const { id } = req.params;
        if(!id) console.log("No user found");
        else{
            const deleterUser = await User.findByIdAndDelete(id);
            res.status(200).json({
                message: "User deleted Successfully.",
                
            });
        }
    }
    catch(error){
        console.log("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

export default productRouter