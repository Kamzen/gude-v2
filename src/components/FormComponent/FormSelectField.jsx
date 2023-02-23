import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import React from "react";
import PropTypes from "prop-types";

const FormSelectField = ({ name, options, label, ...otherProps }) => {
  const { values, setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  options = [{ value: "", label: "None" }, ...options];

  const handleChange = (e) => {
    console.log(e);
    setFieldValue(name, e.target.value);
  };

  const fieldProps = {
    ...field,
    ...otherProps,
    value: values[name],
    label: label,
    onChange: handleChange
  };

  if (meta?.touched && meta?.error) {
    fieldProps.error = true;
  }

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select {...fieldProps} variant="outlined">
        {options?.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      {meta?.touched && meta?.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default FormSelectField;

FormSelectField.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};
