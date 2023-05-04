import { Button } from '@mui/material'
import React from 'react'

function ActionButton(props) {
    const{ text, onClick, children} = props
  return (
    <Button onClick={onClick} style={{color:"black", backgroundColor:"red", paddingRight:"0px"}} >
        {text}
        {children}
    </Button>
  )
}

export default ActionButton