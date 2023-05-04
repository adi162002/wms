import React from 'react';
import "./LandingPage.css";
import Button from '@mui/material/Button';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import GoogleIcon from '@mui/icons-material/Google';
import Test from './Test';
import Stack from '@mui/material/Stack';
export default function LandingPage() {
  return (
    <div className='land'>
      <div className='brand'>
      <img src={"../../Aqualeaps.png"}/>
      </div>
      < div className='box'>
          <h1>Login</h1>
          <div className='SignIn'>
      {/* <Button variant="contained" startIcon={<GoogleIcon />} onClick={Auth} >
        Google SignIn
      </Button> */}
      <Test/>
      </div>
      {/* <div className='but'>
      <Stack direction="row" justifyContent="space-evenly"  spacing={1}>
      <Button variant="outlined" startIcon={<HelpIcon />}>
        Help
      </Button>
      <Button variant="outlined" startIcon={<InfoIcon />}>
        Contact Us
      </Button>
      </Stack>
      </div> */}
      </div>
      <div className="bubbles">
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
        <img src={"../../bubble.png"} />
      </div>
      </div>
  )
}