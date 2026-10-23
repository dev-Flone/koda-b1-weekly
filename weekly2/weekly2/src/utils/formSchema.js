import * as yup from "yup";

export const formSchema = yup.object({
  fullName: yup.string().trim().required("Full name is required."),

  email: yup
    .string()
    .trim()
    .required("Email address is required.")
    .email("Enter a valid email address."),

  phone: yup
    .string()
    .notRequired()
    .matches(/^[0-9+-]*$/, "Format nomor telepon tidak valid"),

  subject: yup.string().trim().required("Subject is required."),

  country: yup.string().trim().notRequired(),

  message: yup.string().trim().required("Message is required."),

  contactMethod: yup.string().notRequired(),

  technologies: yup.array().of(yup.string().defined()).ensure(),
});
