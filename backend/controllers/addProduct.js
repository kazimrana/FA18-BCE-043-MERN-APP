import productModel from "../models/addProduct.js"

export const getProduct = (req,res) => {

};


export const createProduct = async (req,res) => {

    const product_name = (req.body.name)
    const product_price = (req.body.price)
    const product_quantity = (req.body.quantity)


    const newProduct = new productModel({
        Name: product_name,
        Price: product_price,
        Quantity: product_quantity
    });

    try{ 
        await newProduct.save()
        res.json(newProduct)



    } catch(error){
        console.log('Not Saved')
    }

};