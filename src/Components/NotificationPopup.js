import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function NotificationPopup(props) {

 const handleClose = (event, reason) =>{
    if(reason === 'clickaway'){
        return;
    }

    setNotify({
        ...notify,
        isOpen: false
    })

 }
    
    const {notify, setNotify} = props
  return (
    <Snackbar
        open={notify.isOpen}
        autoHideDuration={3000}
        anchorOrigin={{vertical:"top", horizontal: "right"}}
        onClose={handleClose}
    >
    <Alert 
        severity={notify.type}
        onClose={handleClose}
        >
        {notify.message}
    </Alert>
    </Snackbar>
  )
}

export default NotificationPopup