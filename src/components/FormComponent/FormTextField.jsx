import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const FormTextField = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const fieldProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    size: "small",
  };

  if (meta.touched && meta.error) {
    fieldProps.error = true;
    fieldProps.helperText = meta.error;
  }

  return <TextField {...fieldProps} />;
};

export default FormTextField;
