import React, { useState } from "react";
import { SignUpFormValidation } from "../Screens/SignUpScreen/Components/types";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { LoginFormWrapper } from "../Wrappers/LoginFormWrapper";
import {
  Button,
  Divider,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import SignUpHeader from "../Wrappers/SignUpHeaderWrapper";
import dayjs, { Dayjs } from "dayjs";
import axios from "axios";

const validationSchema: yup.Schema<SignUpFormValidation> = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  gender: yup.string().required("Gender is required"),
  password: yup.string().min(8).required("Password is required"),
  birthDay: yup.mixed<Dayjs>().required("Birthday date is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  password: "",
  birthDay: null as Dayjs | null,
  email: "",
};

function SignUpForm() {
  const [error, setError] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        const submissionData = {
          ...values,
          birthDay: values.birthDay?.format("DD-MM-YYYY") || "",
        };
        const response = await axios
          .post("http://localhost:3001/api/user", submissionData)
          .catch((err) => {
            if (err && err.response) setError(err.response.data.message);
          });
        if (response) {
          alert("Welcome back in. Authenticating...");
        }
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <LoginFormWrapper onSubmit={formik.handleSubmit}>
          <SignUpHeader />
          <TextField
            name="firstName"
            id="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            name="lastName"
            id="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          {/*<TextField name="userName" label="Username" required />*/}
          <TextField
            select
            name="gender"
            label="Gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="RatherNotSay">Rather not say</MenuItem>
          </TextField>
          <TextField
            name="email"
            label="Email"
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <DatePicker
            name="birthDate"
            label="Birthday"
            value={formik.values.birthDay}
            onChange={(newValue: Dayjs | null) => {
              void formik.setFieldValue("birthDay", newValue);
            }}
            slotProps={{
              textField: {
                error:
                  formik.touched.birthDay && Boolean(formik.errors.birthDay),
                helperText: formik.touched.birthDay && formik.errors.birthDay,
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Submitting..." : "Sign up"}
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
      )}
    </Formik>
  );
}

export default SignUpForm;
