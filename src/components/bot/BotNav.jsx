import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import myImg from "../../assets/Logo.png"; // Adjust path correctly
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function BotNav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black", boxShadow: 2 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Image */}
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              alignItems: "center",
              textDecoration: "none",
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

          {/* Mobile View Logo */}
          <Box
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: "center",
              textDecoration: "none",
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

          {/* Profile Section */}
          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Profile Info */}
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                  pt: 1,
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <Typography variant="h6" sx={{ mt: 1 }}>
                  Remy Sharp
                </Typography>
              </Box> */}

              <Divider />

              {/* Settings List */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 1,
                }}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{ width: "100%", justifyContent: "center" }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default BotNav;
