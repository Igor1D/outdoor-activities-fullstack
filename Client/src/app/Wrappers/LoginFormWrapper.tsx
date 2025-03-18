import styled from "styled-components";
import {Form} from "formik";

export const LoginIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  svg {
    width: 12vw;
    height: auto;
  }
`;

export const LoginFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2rem;
  max-width: 450px;
  gap: 10px;
  padding: 32px;
  background-color: hsl(210, 69%, 6%);
  box-shadow:
    hsla(220, 30%, 5%, 0.5) 0 5px 15px 0,
    hsla(220, 25%, 10%, 0.08) 0 15px 35px -5px;
`;
