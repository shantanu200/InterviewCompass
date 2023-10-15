import * as yup from "yup";

export const ValidationCompany = yup.object().shape({
  name: yup.string().required("Please enter complete Company Name"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter complete Company Email"),
  phoneNumber: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid Contact Number",
    )
    .required("Please enter complete Company Contact Number"),
  website: yup
    .string()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
      "Invalid Website url",
    ),
  address: yup.string().min(10, "Please enter complete address"),
  password: yup.string().required("Please enter the password"),
});

export const ValidationCompanyLogin = yup.object().shape({
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please enter complete Company Email"),
  password: yup.string().required("Please enter the password"),
});
