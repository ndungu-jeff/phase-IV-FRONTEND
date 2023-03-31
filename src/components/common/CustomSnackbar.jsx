import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = ({
  openSnackbar,
  handleClose,
  snackbarMessage,
  snackbarSeverity,
}) => {
  const vertical = "top";
  const horizontal="center"

  return (
    <Snackbar
      key={new Date().getTime()}
      sx={{ ml: 15 }}
      open={openSnackbar}
      autoHideDuration={15000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarSeverity}
        sx={{ width: "100%"}}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
