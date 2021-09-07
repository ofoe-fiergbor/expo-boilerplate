import * as Yup from "yup";

const genericValidation = (fieldName = "Name", minLength = 3) => {
  return Yup.string()
    .min(minLength, `${fieldName} must be at least 3 characters`)
    .required(`${fieldName} is required`);
};


const passwordValidation = Yup.string()
  .min(8, "Password must be at least 8 characters")
  .required("Password is required");

const confirmPasswordValidation = Yup.string().oneOf(
  [Yup.ref("password"), null],
  "Passwords must match"
);
const emailValidation = Yup.string()
  .email("Invalid email")
  .required("Valid email required");

const phoneNumberValidation = Yup.string()
  .matches(/[0-9]{10}/, "Phone number must be like: 0241234567")
  .required("Phone number is required");

const schema = {
  login: {
    password: passwordValidation,
    phoneNumber: phoneNumberValidation,
  },
  signUp: {
    email: emailValidation,
    phoneNumber: phoneNumberValidation,
    password: passwordValidation,
    lastName: genericValidation("Last name"),
    firstName: genericValidation("First name"),
    confirmPassword: confirmPasswordValidation,
  },
  requestPasswordReset: {
    phoneNumber: phoneNumberValidation,
  },
  resetPassword: {
    password: passwordValidation,
    confirmPassword: confirmPasswordValidation,
  },
  physicalDescription: {
    email: emailValidation,
    
  },
  comment:{
    comment: genericValidation("Comment", 1)
  }
};

const Validation = new Proxy(schema, {
  get: (schema, prop) => {
    if (["prototype", "$$typeof"].includes(prop)) return;

    if (prop in schema) return Yup.object().shape(schema[prop]);

    throw new Error(`${prop} validation Schema not found`);
  },
});

export default Validation;
