import formModel from "../models/addForm.js";

export const show = async (req, res) => {

  try {
    const result = await formModel.find();
    res.json(result)
    
  } catch (error) {
    console.log('Not Found Any Data')
    
  }

};


export const createForm = async (req, res) => {
  console.log("Form Reached");
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const gender = req.body.gender;
  const pr_name = req.body.product_name;

  const newForm = new formModel({
    Name: name,
    Email: email,
    Phone: phone,
    Gender: gender,
    ProductName: pr_name,
  });

  try {
    await newForm.save();
    res.json(newForm);
  } catch (error) {
    console.log("Not Saved");
  }
};

export const updateforms =  (req,res) => {
 
  console.log (req.body)
  
  formModel.findOne({Phone: req.body.Phone}).exec((err,FormData)=>{
      if (err) throw err
      FormData.Name= req.body.Name;
      FormData.Phone= req.body.Phone;
      FormData.Email= req.body.Email;
      FormData.ProductName= req.body.ProductName;
      FormData.Gender= req.body.Gender;


      FormData.save();
      res.send()
  })
}