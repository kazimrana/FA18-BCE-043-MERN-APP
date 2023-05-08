import mongoose from "mongoose";

const formStructure = mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Gender: String,
  ProductName: String,
});

const formModel = mongoose.model("Form Data", formStructure);

export default formModel;
