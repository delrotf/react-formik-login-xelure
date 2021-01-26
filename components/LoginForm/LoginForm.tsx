import { Formik, Form } from "formik";
import React from "react";
import { Button, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const LoginForm = props => {
  const formValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    firstname: Yup.string()
      .required("This field is required.")
      .matches(/^[A-Za-z ]+$/, "Numbers are not allowed."),

    lastname: Yup.string()
      .required("This field is required.")
      .matches(/^[A-Za-z ]+$/, "Numbers are not allowed."),

    email: Yup.string()
      .required("This field is required.")
      .email("Invalid email format."),

    password: Yup.string()
      .required("This field is required.")
      .min(8, "At least ${min} characters.")
      .matches(/^[0-9A-Za-z]+$/, "Only letters and numbers.")
  });

  const onSubmit = values => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <div className="p-3">
            <BsForm.Row>
              <Input
                controlId="firstname"
                name="firstname"
                type="text"
                label="First name"
              />
              <Input
                controlId="lastname"
                name="lastname"
                type="text"
                label="Last name"
              />
            </BsForm.Row>
            <BsForm.Row>
              <Input
                controlId="email"
                name="email"
                type="email"
                label="Email address"
              />
              <Input
                controlId="password"
                name="password"
                type="password"
                label="Password"
              />
            </BsForm.Row>
            <hr />
            <div className="mb-3">
              <Button
                variant="outline-light"
                className="p-3"
                type="submit"
                block
              >
                <span className="mr-2">Claim you free trial</span>
                <FontAwesomeIcon icon={faCaretRight} />
              </Button>
            </div>
            <span className="text-muted">You are agreeing to our </span>
            <a href="#">Terms and Services</a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { LoginForm };
