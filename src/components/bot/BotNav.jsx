import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import myImg from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Authentication/ProfileDropdown";

function BotNav() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Container - Left Side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Desktop Logo */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img
                  src={myImg}
                  alt="Logo"
                  style={{ width: "70px", height: "70px" }}
                />
              </Link>
            </Box>

            {/* Mobile Logo */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img
                  src={myImg}
                  alt="Logo"
                  style={{ width: "70px", height: "70px" }}
                />
              </Link>
            </Box>
          </Box>

          {/* Profile Dropdown - Right Side */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ProfileDropdown />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default BotNav;
