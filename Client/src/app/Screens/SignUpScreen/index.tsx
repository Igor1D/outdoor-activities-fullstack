import React from "react";
import { LoginLayout } from "../../Layout/LoginLayout/LoginLayout";
import SignUpForm from "../../Forms/SignUpForm";

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
