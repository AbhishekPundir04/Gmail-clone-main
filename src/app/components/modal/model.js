import React, { useState } from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Dialog, Modal } from '@mui/material';


function FileFormatModal({open,handleClose,handleFormatChange,}) {
    const modalStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
      };
    
    return (
      <div>
      
        <Dialog style={{modalStyle}} open={open} onClose={handleClose} hideBackdrop >
          <div>
            <h2>Select File Format</h2>
            <RadioGroup
              name="fileFormat"
              onChange={handleFormatChange}
            >
              <FormControlLabel
                value="pdf"
                control={<Radio />}
                label="PDF format"
              />
              <FormControlLabel
                value="word"
                control={<Radio />}
                label="Word format"
              />
              <FormControlLabel
                value="txt"
                control={<Radio />}
                label="Text format"
              />
            </RadioGroup>
          </div>
        </Dialog>
      </div>
    );
  }
  
  export default FileFormatModal;