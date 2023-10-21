import { Button } from "@mui/material";
import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, variant,onClick }) => {
  return (
    <div className="custom-button">
      <Button 
        variant={variant} 
        onClick={onClick}
        fullWidth
        >
            {children}
      </Button>
    </div>
  );
};

export default CustomButton;
