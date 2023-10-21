import React from "react";
import { FormControl, Select, MenuItem } from "@mui/material";

export default function CommonSelect({
  classNames,
  fullWidth,
  options,
  id,
  name,
  selectedValue,
  handleChange,
  main_className,
  ...props
}) {
  return (
    <div>
      <FormControl
        fullWidth
        className={`${main_className} main_className global_select `}
      >
        <Select
          onChange={handleChange}
          value={selectedValue}
          id={id}
          name={name}
          fullWidth={fullWidth}
          InputLabelProps={{ shrink: false }}
          {...props}
          displayEmpty
        >
          <MenuItem value="">
            <span>{"dropdown.select"}</span>
          </MenuItem>
          {options &&
            options.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
