import * as yup from "yup";

export const validation = yup.object().shape({
  firstName: yup.string().trim().required(),
  secondName: yup.string().trim().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  category: yup.string().required().min(3),
  gender: yup.string().required().min(3),
  favorite: yup.boolean(),
});
