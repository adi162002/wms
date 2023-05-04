import React from 'react'
import { Button } from '@mui/material'

function Buttons(props) {

    const{text,onClick} = props
    
    
  return (
    <Button        
    variant="outlined"
    onClick={onClick}
    
    >
        {text}
        
    </Button>
  )
}

export default Buttons