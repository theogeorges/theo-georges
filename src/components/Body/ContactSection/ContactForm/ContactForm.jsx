import { Button, TextField } from "@mui/material";
import React from "react";
import "./ContactForm.scss";
import { useFormControls } from "./ContactFormControls";

const inputFieldValues = [
  {
    name: "subject",
    label: "Objet *",
    placeholder: "Objet du mail...",
    maxLength: 50,
    id: "subject",
  },
  {
    name: "body",
    label: "Message *",
    placeholder: "Contenu de votre message...",
    id: "message",
    multiline: true,
    maxLength: 500,
    rows: 10,
  },
];

export const ContactForm = () => {
  const { handleInputValue, formIsValid, errors, values } = useFormControls();

  return (
    <form
      autoComplete="off"
      action={
        "mailto:theo.georges123@gmail.com?subject=" +
        values.subject +
        "&body=" +
        values.body
      }
      method="GET"
      className="contact-form"
    >
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            key={index}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            className="field"
            variant="filled"
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            error={errors[inputFieldValue.name]}
            multiline={inputFieldValue.multiline ?? false}
            fullWidth
            placeholder={inputFieldValue.placeholder}
            inputProps={{
              maxLength: inputFieldValue.maxLength,
            }}
            rows={inputFieldValue.rows ?? 1}
            autoComplete="none"
            {...(errors[inputFieldValue.name]
              ? {
                  error: true,
                  helperText: errors[inputFieldValue.name],
                }
              : {
                  helperText: `${values[inputFieldValue.name].length}/${
                    inputFieldValue.maxLength
                  }`,
                })}
          />
        );
      })}
      <Button variant="contained" type="submit" disabled={!formIsValid()}>
        Envoyer
      </Button>
    </form>
  );
};
