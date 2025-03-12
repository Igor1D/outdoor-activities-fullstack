import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

// interface ForgotPasswordProps {
//   open: boolean;
//   handleClose: () => void;
// }

function ForgotPassword() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <Typography>Forgot your password?</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        component="form"
        onSubmit={() => console.log("clicked")}
      >
        <DialogTitle className={"login-dialog-title"}>
          Reset password
        </DialogTitle>
        <DialogContent className={"login-dialog-content"}>
          <DialogContentText>
            <Typography>
              Enter your account's email address, and we'll send you a link to
              reset your password.
            </Typography>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions className={"login-dialog-actions"}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Continue</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ForgotPassword;
