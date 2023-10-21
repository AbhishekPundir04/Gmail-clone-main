import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button, Grid, InputLabel, TextField } from "@mui/material";
import { ReactComponent as CloseSvg } from "../../../assets/images/close.svg";
function CustomDialog({
  isOpen,
  handleClose,
  isButton,
  header,
  bodyChild,
  yes,
  no,
  handleConfirm,
  reasonText,
  reason,
  isText,
  placeholder,
  label,
  labelClass,
  mainClass,
  fullWidth,
  display,
  button_show,
  isClose,
  singlebtn_class,
  header_style,
  rows,
  fullScreen,
  modal_reason,
  isCommonButton,
  fileError,
  disabledBtn,
}) {
  return (
    <div className={mainClass ?? ""}>
      <Dialog
        open={isOpen}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        disableScrollLock={true}
        className={mainClass ?? ""}
      >
        <DialogTitle className={header_style}>
          {header}
          {isClose && (
            <CloseSvg
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "13px",
                right: "13px",
                cursor: "pointer",
              }}
            />
          )}
        </DialogTitle>
        <DialogContent>
          {isText === "1" ? (
            <>
              <InputLabel id="label" className={labelClass}>
                {label}
              </InputLabel>
              <TextField
                id="item-name"
                placeholder={placeholder}
                value={reason}
                fullWidth={fullWidth}
                onChange={(e) => {
                  reasonText(e);
                }}
              />
            </>
          ) : isText === "2" ? (
            <>
              <InputLabel id="label" className={labelClass}>
                {label}
              </InputLabel>
              <TextField
                placeholder={placeholder}
                value={reason}
                fullWidth={fullWidth}
                multiline
                rows={rows}
                onChange={reasonText}
              />
              {fileError ? <div className="error">{fileError}</div> : ""}
            </>
          ) : (
            ""
          )}
          <DialogContentText style={{ overflowWrap: "anywhere" }}>
            {bodyChild}
          </DialogContentText>
        </DialogContent>
        {isButton &&
          (isCommonButton ? (
            <DialogActions>
              {button_show === true ? (
                <Box
                  sx={{ display: "block", width: "100%" }}
                  textAlign="center"
                  className={singlebtn_class}
                >
                  <Button
                    onClick={handleConfirm}
                    color="primary"
                    variant="contained"
                    disabled={disabledBtn}
                  >
                    {yes}
                  </Button>
                </Box>
              ) : (
                <Grid container spacing={2} className={modal_reason}>
                  <Grid item xs={8}>
                    <Button
                      onClick={handleConfirm}
                      color="primary"
                      variant="contained"
                      fullWidth
                      disabled={!reason}
                    >
                      {yes}
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      onClick={handleClose}
                      header
                      color="secondary"
                      variant="outlined"
                      fullWidth
                      sx={{ display: `${display}` ?? "block" }}
                    >
                      {no}
                    </Button>
                  </Grid>
                </Grid>
              )}
            </DialogActions>
          ) : (
            <div className="add_bx">
              <div className="add_btns">
                <Button
                  onClick={handleClose}
                  header
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  sx={{ display: `${display}` ?? "block" }}
                >
                  {no}
                </Button>
                <Button
                  onClick={handleConfirm}
                  color="primary"
                  variant="contained"
                  fullWidth
                  // disabled={!reason?.trim()}
                >
                  {yes}
                </Button>
              </div>
            </div>
          ))}
      </Dialog>
    </div>
  );
}

export default React.memo(CustomDialog);
