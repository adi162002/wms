import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import ActionButton from './ActionButton'

function PopUp(props) {
    const{title, children, openPopup, setOpenPopup} = props
  return (
    <Dialog open={openPopup}>
        <DialogTitle>
            <div style={{display: "flex"}}>
            <Typography variant="h5" style={{flexGrow: 1}}>
                {title}
            </Typography>
            <ActionButton 
                text="X"
                onClick={()=>{setOpenPopup(false)}}
            >

            </ActionButton>
            </div>
        </DialogTitle>
           
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default PopUp