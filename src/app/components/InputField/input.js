import { FormControl, InputLabel, TextField } from "@mui/material";
import React from "react";
import "./input.scss"

export default function Input({
  title,
  placeholder,
  value,
  id,
  name,
  onInput,
  onKeyDown,
  onKeyPress,
  onChange={onChange}

}) {
  return (
    <div className="main-input-div">
      <InputLabel>{title}</InputLabel>
      <FormControl fullWidth>
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
      </FormControl>
    </div>
  );
}
