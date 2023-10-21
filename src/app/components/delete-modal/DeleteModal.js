import React from "react";
import Dialog from "@mui/material/Dialog";
import "./delete.scss";
import { Button } from "@mui/material";

function DeleteModal({ isOpen, handleClose, title,clearTextArea }) {
  const handleDeleteClick = () => {
    clearTextArea(); // Call the clearTextArea function to delete data
    handleClose(); // Close the modal
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      disableScrollLock={true}
      className="delete_modal"
    >
      <div className="delete_main_wrapper">
        <div className="content_wrapper">
         
          <div className="title">
            <p>Delete all text</p>
          </div>
          <div className="subtitle">
            <p>
            You’re about to delete the original and summarized text
              <span style={{ fontWeight: 600 }}> {title}</span>
              
            </p>
          </div>
        </div>
        <div className="button_wrapper">
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleDeleteClick} color="success" variant="contained">
           Delete
          </Button>
        </div>
      </div>
    </Dialog> 
  );
}

export default React.memo(DeleteModal);
