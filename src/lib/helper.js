import * as Yup from "yup";
export const initialState = {
  title: "",
  author: "",
  content: "",
};
export const validationSchema = Yup.object({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  author: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  content: Yup.string()
    .max(240)
    .required("Required"),
});
