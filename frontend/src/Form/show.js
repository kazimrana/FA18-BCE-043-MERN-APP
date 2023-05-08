import React, { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Navbars from "../Header/navbar";
import { delForm, getForm } from "../Service/api";
import "./show.css";
import "../Form/form.css";
import { Link } from "react-router-dom";
import "../Homepage/Product/product.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Form/form.css";
import { addForm } from "../Service/api";
import { Updateapi } from "../Service/api";

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  phone: Yup.number()
    .integer("Password must be 11 characters and not Letters")
    .required("Phone is required"),
  gender: Yup.string().required("Select Your Gender"),
  product_name: Yup.string().required("Enter the Product Name"),
});

function Show() {
  const [formData, setformData] = useState([]);
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Gender, setGender] = useState();
  const [ProductName, setProductName] = useState();

  useEffect(() => {
    getFormDetails();
  }, []);

  const getFormDetails = async () => {
    const result = await getForm();
    setformData(result.data);
  };
  const handleDelete = async (id) => {
    alert("Really wants to Delete This Data ?");
    await delForm(id);
  };

  const handleUpdate = async () => {
    const FormData = {
      Name: Name,
      Email: Email,
      Phone: Phone,
      Gender: Gender,
      ProductName: ProductName,
    };
    console.log(FormData);
    await Updateapi(FormData);
  };

  useEffect(() => {
    getFormDetails();
  }, [formData]);

  return (
    <div>
      <Navbars />
      <div id="show-div-1">
        {formData.map((details) => (
          <ul className="list-group">
            <div className="alert alert-success mt-3">
              Form Data From Mongo DB
            </div>
            <li className="list-group-item">Email: {details.Email}</li>
            <li className="list-group-item">Full Name: {details.Name}</li>
            <li className="list-group-item">Phone: {details.Phone}</li>
            <li className="list-group-item">Gender: {details.Gender}</li>
            <li className="list-group-item">
              {" "}
              Product Name: {details.ProductName}{" "}
            </li>

            <br />
            <div className="row">
              <div className="col-12">
                <Link to="/show">
                  <button id="submit-form4" onClick={()=>handleDelete(details._id)}>Delete Data</button>
                </Link>

                <button
                  id="submit-form3"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Update
                </button>
              </div>
            </div>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <label className="mb-2"> Name</label>
                          <input
                            className="form-control mb-3"
                            type="text"
                            name="Name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Name"
                          ></input>

                          <label className="mb-2"> Gender</label>
                          <input
                            className="form-control mb-3"
                            type="text"
                            name="Gender"
                            onChange={(e) => setGender(e.target.value)}
                            placeholder="Enter Your Gender"
                            // {formData.ProductName}
                          ></input>

                          <label className="mb-2"> Email</label>
                          <input
                            className="form-control mb-3"
                            type="email"
                            name="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email"
                            // {formData.ProductName}
                          ></input>

                          <label className="mb-2"> Phone Number</label>
                          <input
                            className="form-control mb-3"
                            type="number"
                            name="Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Enter Your Phone Number"
                            // {formData.ProductQty}
                          ></input>

                          <label className="mb-2"> Product Name</label>
                          <input
                            className="form-control mb-3"
                            type="text"
                            name="ProductName"
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder=""
                            // {formData.ProductName}
                          ></input>

                          <button
                            className="btn btn-primary form-control"
                            onClick={handleUpdate}
                          >
                            {" "}
                            Update{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Show;
