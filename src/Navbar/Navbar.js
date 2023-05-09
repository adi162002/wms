import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import { IconButton, Stack } from "@mui/material";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router-dom";
function Navbar(props) {
  const navigate = useNavigate();
  const x = props.prop;
  console.log(x)
  return (
    <div>
      <header className="nav-container">
        <img src={"../../Aqualeaps.png"} alt="Logo" className="nav-logo" />
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <IconButton
            label="Profile"
            title="Profile"
            onClick={() => {
              navigate("/profile", {
                state: {
                  resp: x,
                },
              });
            }}
          >
            <AccountBoxTwoToneIcon />
          </IconButton>
          <IconButton label="Notifications" title="Notifications">
            <Badge variant="dot" color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton label="Logout" title="Logout" onClick={() => {
              navigate("/");
            }}>
            <LogoutTwoToneIcon />
          </IconButton>
        </Stack>
      </header>
    </div>
  );
}
export default Navbar;
