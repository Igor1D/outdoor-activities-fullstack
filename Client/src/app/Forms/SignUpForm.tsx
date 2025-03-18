import React, { useState } from "react";
import { SignUpFormValidation } from "../Screens/SignUpScreen/Components/types";
import * as yup from "yup";
import { Formik } from "formik";
import { LoginFormWrapper } from "../Wrappers/LoginFormWrapper";
import {
  Button,
  Divider,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import styled from "styled-components";
import SignUpHeader from "../Wrappers/SignUpHeaderWrapper";

const validationSchema: yup.Schema<SignUpFormValidation> = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Lass Name is required"),
  gender: yup.string().required(),
  password: yup.string().min(8).required("Password is required"),
  birthDay: yup.date().required(),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

function SignUpForm() {
  const [date, setDate] = useState();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        password: "",
        birthDay: "",
        email: "",
      }}
      onSubmit={() => {
        console.log("submitted");
      }}
      validationSchema={validationSchema}
    >
      <LoginFormWrapper>
        <SignUpHeader />
        <TextField name="firstName" label="First Name" required />
        <TextField name="lastName" label="Last Name" required />
        <DatePicker
          label="Birthday"
          value={date}
          slotProps={{
            textField: {
              required: true,
            },
          }}
          // onChange={(newValue) => setDate(newValue)}
        />
        <TextField
          name="password"
          label="Password"
          placeholder="••••••"
          type="password"
          id="password"
          required
        />
        <TextField
          name="email"
          label="Email"
          id="email"
          type="email"
          placeholder="your@email.com"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Sign Up
        </Button>
        <Divider>
          <Typography color={"textPrimary"} fontSize={"small"}>
            or
          </Typography>
        </Divider>
        <Typography align={"center"} color={"textPrimary"}>
          <Link href="/login" variant="body1">
            Already have an account?
          </Link>
        </Typography>
      </LoginFormWrapper>
    </Formik>
  );
}

export default SignUpForm;
