import { Dayjs } from "dayjs";

export interface SignUpFormValidation {
  email: string;
  firstName: string;
  lastName: string;
  birthDay: Dayjs;
  gender: string;
  password: string;
}
