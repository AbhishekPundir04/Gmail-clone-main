import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel, FormControl } from "@mui/material";

export default function Inputs({
  title,
  placeholder,
  classNames,
  rows,
  istextField,
  istextArea,
  main_input_wrapper,
  name,
  value,
  id,
  onChange,
  onKeyPress,
  props,
  onKeyDown,
  onInput,
}) {
  return (
    <div className={main_input_wrapper}>
      <InputLabel id="label" className={classNames}>
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
