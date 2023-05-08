import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Form/form.css";
import { useNavigate } from "react-router";
import { addForm } from "../Service/api";
import { Link } from "react-router-dom";

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

const Forms = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              gender: "",
              product_name: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={async (values, { resetForm }, e) => {
              await new Promise((r) => setTimeout(r, 100));
              console.log(values);
              const handleForm = async () => {
                await addForm(values);
              };
              handleForm();
              resetForm({ values: "" });
              e.preventDefault();
              //navigate("/show", { state: values });
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="row">
                      <div>
                        <p id="form-p1" style={{ color: "#ea2425;" }}>
                          Having Any Query !
                        </p>
                        <p id="form-p2">Let us Know</p>
                      </div>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group ">
                      <Field
                        id="input-1"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className={`mt-2 form-control
						${touched.name && errors.name ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <Field
                        id="input-1"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autocomplete="off"
                        className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <Field
                        id="input-1"
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className={`mt-2 form-control
						${touched.phone && errors.phone ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="phone"
                        className="invalid-feedback"
                      />
                    </div>

                    <div>
                      <p
                        id="form-p3"
                        className={`mt-2 form-control
						${touched.gender && errors.gender ? "is-invalid" : ""}`}
                      >
                        Gender:
                        <br />
                        <Field
                          type="radio"
                          name="gender"
                          id="Male"
                          value="male"
                        />
                        <label id="l-male" htmlFor="Male">
                          Male
                        </label>
                        <Field
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                        />
                        <label id="l-male" htmlFor="female">
                          Female
                        </label>
                      </p>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group ">
                      <Field
                        id="input-1"
                        type="text"
                        name="product_name"
                        placeholder="Product Name"
                        className={`mt-2 form-control
${touched.product_name && errors.product_name ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="product_name"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <button id="submit-form" type="submit">
                        Submit
                      </button>
                      <Link to="/show">
                        <button id="submit-form3" type="button">
                          View Record
                        </button>
                      </Link>
                    </div>
                  </Form>
                </div>
              ) : (
                <div></div>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Forms;
