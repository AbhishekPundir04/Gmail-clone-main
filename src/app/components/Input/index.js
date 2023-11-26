import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, FormControl } from "@mui/material";
import "./input.scss";

export default function Inputs({
  title,
  placeholder,
  labelClassName,
  rows,
  istextField,
  istextArea,
  name,
  value,
  id,
  onChange,
  onKeyPress,
  props,
  onKeyDown,
  onInput,
  disabled,
}) {
  return (
    <div className="main_input_wrapper">
      <InputLabel id="label" className={labelClassName}>
        {title}
      </InputLabel>
      <FormControl fullWidth>
        {istextField && (
          <TextField
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            name={name}
            value={value}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onInput={onInput}
            disabled={disabled}
          />
        )}
        {istextArea && (
          <TextField
            fullWidth
            placeholder={placeholder}
            onChange={onChange}
            id={id}
            rows={rows}
            name={name}
            value={value}
            onKeyPress={onKeyPress}
            onInput={onInput}
            multiline
          />
        )}
      </FormControl>
    </div>
  );
}

// use like this

{
  /* <Grid item xs={6}>
<Inputs
  value={values.vehicleName}
  name="vehicleName"
  onChange={handleChange}
  title="Vehicle Name"
  showStar={true}
  placeholder="Enter the vehicle name"
  istextField={true}
  disabled={isView}
  labelClassTextfield="labelClassTextfield"
  onInput={onlyCaptilizeCharacters}
  onKeyPress={(event) => handleTextInput(event, 30)}
/>
{touched.vehicleName && errors.vehicleName && (
  <div className="error">{errors.vehicleName}</div>
)}
</Grid> */
}
