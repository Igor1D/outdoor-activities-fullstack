import React from "react";
import { LoginLayout } from "../../Layout/LoginLayout/LoginLayout";
import LoginForm from "../../Forms/LoginForm";
import SignUpForm from "../../Forms/SignUpForm";
import SignUpHeader from "../../Wrappers/SignUpHeaderWrapper";

function SignUpScreen() {
  return (
    <>
      <LoginLayout>
        <SignUpForm />
      </LoginLayout>
    </>
  );
}

export default SignUpScreen;
