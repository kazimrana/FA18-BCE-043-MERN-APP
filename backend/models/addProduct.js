import mongoose from "mongoose";

const productStructure = mongoose.Schema({
  Name: String,
  Price: Number,
  Quantity: Number,
});

const productModel = mongoose.model("Product_List", productStructure);

export default productModel;
