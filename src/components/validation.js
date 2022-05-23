import * as Yup from "yup";

export const Validation = Yup.object({
  name: Yup.string().required("Zorunlu Alan"),
  email: Yup.string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Zorunlu Alan"),
  subject: Yup.string().required("Zorunlu Alan"),
  message: Yup.string().required("Zorunlu Alan"),
});
