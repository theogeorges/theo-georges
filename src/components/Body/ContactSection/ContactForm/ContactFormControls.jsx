import { useState } from "react";

const initialFormValues = {
  subject: "",
  body: "",
  formSubmitted: false,
  success: false,
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("subject" in fieldValues)
      temp.subject = fieldValues.subject ? "" : "Champ requis.";

    if ("body" in fieldValues)
      temp.body = fieldValues.body.length !== 0 ? "" : "Champ requis.";

    setErrors({
      ...temp,
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.subject &&
      fieldValues.body &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    values,
    errors,
    handleInputValue,
    formIsValid,
  };
};
