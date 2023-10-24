// React More CSS
  import React, { useState } from 'react';
// React More CSS

// Mui
  import { Snackbar } from "@mui/material";
  import MuiAlert  from "@mui/lab/Alert";
// Mui

const Mui_Alert = () => {

  const [ alert, setAlert] = useState('')

  // Mui alert
    const handleCloseAlert = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setAlert({ open: false });
    };
  // Mui alert

    return (
      <>
        <Snackbar
          open={alert.open}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          style={{position: "relative"}}
        >
          <MuiAlert
            onClose={handleCloseAlert}
            elevation={10}
            variant="filled"
            severity={alert.type}
          >
            {alert.message}
          </MuiAlert>
        </Snackbar>
      </>
    )
};

export default Mui_Alert;