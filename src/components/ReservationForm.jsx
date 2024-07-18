import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReservationForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest is required")
      .required("Number of guests is required"),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
  };

  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
    alert("Reservation submitted successfully!");
  };

  return (
    <div className="container my-5" style={{fontSize: "20px"}}>
      <h1 class="text-center my-2 py-4">Reservation Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                className={`form-control ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
                id="name"
                name="name"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="name"
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                className={`form-control ${
                  touched.email && errors.email ? "is-invalid" : ""
                }`}
                id="email"
                name="email"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="email"
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <Field
                type="tel"
                className={`form-control ${
                  touched.phone && errors.phone ? "is-invalid" : ""
                }`}
                id="phone"
                name="phone"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="phone"
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <Field
                type="date"
                className={`form-control ${
                  touched.date && errors.date ? "is-invalid" : ""
                }`}
                id="date"
                name="date"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="date"
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <Field
                type="time"
                className={`form-control ${
                  touched.time && errors.time ? "is-invalid" : ""
                }`}
                id="time"
                name="time"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="time"
              />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <Field
                type="number"
                className={`form-control ${
                  touched.guests && errors.guests ? "is-invalid" : ""
                }`}
                id="guests"
                name="guests"
              />
              <ErrorMessage
                component="div"
                className="invalid-feedback"
                name="guests"
              />
            </div>
            <br/>
            <div class="text-center">
              <button type="submit" className="btn btn-lg btn-warning mt-3">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
