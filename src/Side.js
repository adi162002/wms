import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "./Side.scss";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const Side = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <ProSidebar collapsed={isCollapsed} style={{ backgroundColor: "blue" }}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                textAlign="center"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color="black">
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../dp.jpg`}
                  style={{ cursor: "pointer", borderRadius: "100%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography variant="h4" fontWeight="bold" color="black">
                  NAME
                </Typography>
                <Typography color="black">ROLE</Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </div>
  );
};
export default Side;