import formModel from "../models/addForm.js";

export const delForm = async (req, res) => {

    const id = req.body
    const result =await formModel.deleteOne({id:id})
    res.json(result)
  };
  