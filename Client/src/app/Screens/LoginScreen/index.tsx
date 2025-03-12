import React from "react";
import LoginForm from "./Components/LoginForm";
import { LoginLayout } from "../../Layout/LoginLayout/LoginLayout";

function LoginScreen() {
  return (
    <>
      <LoginLayout>
        <LoginForm />
      </LoginLayout>
    </>
  );
}

export default LoginScreen;
