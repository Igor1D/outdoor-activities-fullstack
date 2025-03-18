import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

function SignUpHeader() {
  return (
    <>
      <SignUpHeaderWrapper>
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          fontWeight="700"
        >
          Create a new account
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" fontWeight="500">
          Adventure starts here.
        </Typography>
      </SignUpHeaderWrapper>
    </>
  );
}

export default SignUpHeader;

export const SignUpHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
