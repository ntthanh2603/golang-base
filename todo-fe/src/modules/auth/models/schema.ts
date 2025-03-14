import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().email("invalid email").required("email is required"), // "email is required" is a custom error message
    password: yup.string().required("password is required"),
  })
  .required();

export const registerSchema = yup
  .object({
    email: yup.string().email("invalid email").required("email is required"), // "email is required" is a custom error message
    password: yup.string().required("password is required"),
    first_name: yup.string().required("first name is required"),
    last_name: yup.string().required("last name is required"),
  })
  .required();
