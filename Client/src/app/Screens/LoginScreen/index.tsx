import React from "react";

import { LoginLayout } from "../../Layout/LoginLayout/LoginLayout";
import LoginForm from "../../Forms/LoginForm";

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
