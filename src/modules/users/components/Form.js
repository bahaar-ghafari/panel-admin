import React, { Component } from "react";
import { Formik } from "formik";
import { GenericForm } from "./GenericForm";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  username: Yup.string("Enter a username").required("UserName is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string("Enter a phone number").required("Phone is required"),
  street: Yup.string("Enter a street").required("Street is required"),
  suit: Yup.string("Enter a suit").required("Suit is required"),
  city: Yup.string("Enter a city").required("City is required"),
  zipcode: Yup.string("Enter a zipcode").required("zipcode is required"),
  lat: Yup.string("Enter a lat").required("lat is required"),
  lng: Yup.string("Enter a lng").required("lng is required")
  // password: Yup.string("")
  //   .min(8, "Password must contain atleast 8 characters")
  //   .required("Enter your password"),
  // confirmPassword: Yup.string("Enter your password")
  //   .required("Confirm your password")
  //   .oneOf([Yup.ref("password")], "Password does not match")
});

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
    // console.log(data);
    console.table(data);
  };

  render() {
    const classes = this.props;
    const values = {
      name: "",
      username: "",
      email: "",
      phone: "",
      street: "",
      suit: "",
      city: "",
      zipcode: "",
      lat: "",
      lng: "" /*, confirmPassword: "", password: "" */
    };
    return (
      <React.Fragment>
        <div style={{ margin: "5%" }}>
          <Paper elevation={1} className={classes.paper}>
            <h2>Form</h2>
            <Formik
              render={props => <GenericForm {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
