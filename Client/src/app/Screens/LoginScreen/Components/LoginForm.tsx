import React from "react";
import { LoginFormValidation } from "./types";
import * as yup from "yup";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import SiteIcon from "./Icons/CustomIcons";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import {
  LoginFormWrapper,
  LoginIconWrapper,
} from "../../../Forms/LoginFormWrapper";
import ForgotPassword from "./ForgotPassword";

const validationSchema: yup.Schema<LoginFormValidation> = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export function LoginForm() {
  return (
    <Formik
      initialValues={{ user: "", password: "" }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      <LoginFormWrapper>
        <LoginIconWrapper>
          <SiteIcon />
        </LoginIconWrapper>
        <Typography component="h1" variant="h4" color={"textPrimary"}>
          Sign in
        </Typography>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          // error={emailError}
          // helperText={"emailErrorMessage"}
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          // autoComplete="email"
          // autoFocus
          required
          fullWidth
          variant="outlined"
          // fullWidth={true}
        />
        {/*</FormControl>*/}
        {/*<FormControl>*/}

        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          // error={passwordError}
          // helperText={passwordErrorMessage}
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          // autoComplete="current-password"
          // autoFocus
          required
          fullWidth
          variant="outlined"
          // color={passwordError ? "error" : "primary"}
        />
        {/*</FormControl>*/}
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label={
            <Typography align={"center"} color={"textPrimary"}>
              Remember me
            </Typography>
          }
        />
        {/*<ForgotPassword open={open} handleClose={handleClose} />*/}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Sign in
        </Button>
        {/*<Link*/}
        {/*  component="button"*/}
        {/*  type="button"*/}
        {/*  color={"secondary"}*/}
        {/*  // onClick={() => {*/}
        {/*  //   console.log("clicked");*/}
        {/*  // }}*/}

        {/*  variant="body2"*/}
        {/*>*/}
        {/*  Forgot your password?*/}
        {/*</Link>*/}
        <ForgotPassword />
        <Divider>
          <Typography color={"textPrimary"} fontSize={"small"}>
            or
          </Typography>
        </Divider>
        <Button
          fullWidth
          variant="contained"
          color={"secondary"}
          onClick={() => alert("Sign in with Google")}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          color={"secondary"}
          onClick={() => alert("Sign in with Apple")}
          startIcon={<AppleIcon />}
        >
          Sign in with Apple
        </Button>
        <Typography align={"center"} color={"textPrimary"}>
          Don't have an account?{" "}
          <Link href="/" variant="body1">
            Sign up
          </Link>
        </Typography>
      </LoginFormWrapper>
    </Formik>
  );
}

export default LoginForm;
