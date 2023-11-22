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
