import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import "./customSelect.scss";

export default function CommonSelect({
  classNames,
  fullWidth,
  options,
  id,
  name,
  title,
  selectedValue,
  handleChange,
  main_className,
  select_clasName,
  CommonSlectWrpper,
  labelClass,
  label,
  isMoreOptions,
  disabled,
  ...props
}) {
  return (
    <div className="commonSelectWrpper">
      {label && (
        <InputLabel id="label" className={labelClass}>
          {label}
        </InputLabel>
      )}
      <FormControl
        className={`${main_className} main_className global_select `}
      >
        <Select
          className={`${select_clasName}`}
          onChange={handleChange}
          value={selectedValue ? selectedValue : "none"}
          id={id}
          name={name}
          disabled={disabled}
          fullWidth={fullWidth}
          InputLabelProps={{ shrink: false }}
          {...props}
          displayEmpty
        >
          <MenuItem
            sx={{
              display: "none",
            }}
            value="none"
          >
            <span>{`Select ${title}`}</span>
          </MenuItem>
          {options &&
            options?.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}

          {isMoreOptions &&
            isMoreOptions?.map((item) => (
              <MenuItem value={item._id}>{item.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
