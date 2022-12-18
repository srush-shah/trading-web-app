import React, { useState } from "react";

//Components
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Menu,
  Button,
  Tooltip,
  MenuItem,
  Typography,
  Badge,
} from "@mui/material";

//Icons
import MenuIcon from "@mui/icons-material/Menu";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["Onboarding", "Deposit", "Withdraw", "Adjust Margin"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <AppBar position="static" sx={{ background: "#1F1F24" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button variant="text" sx={{ ":hover": { background: "none" } }}>
              <img
                src="https://www.density.exchange/static/media/logo.291041089f7739e4e1658baf3cf4bf23.svg"
                alt="Density Logo"
              />
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 2 }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 3,
                    color: "#D9D9D9",
                    display: "block",
                    mx: 2,
                    textTransform: "capitalize",
                    ":active": {
                      color: "white",
                      textDecoration: "underline",
                    },
                    ":hover": {
                      background: "none",
                      textDecoration: "underline",
                      color: "white",
                    },
                  }}
                  size="medium"
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Docs">
                <IconButton
                  sx={{
                    p: 1,
                    background: "#56565D",
                    borderRadius: "50%",
                    mx: 2,
                  }}
                >
                  <LibraryBooksIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Check Balance">
                <IconButton
                  sx={{
                    p: 1,
                    background: "#56565D",
                    borderRadius: "50%",
                    mx: 2,
                  }}
                >
                  <AccountBalanceWalletIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Account Settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    p: 1,
                    background: "#56565D",
                    borderRadius: "50%",
                    mx: 2,
                  }}
                >
                  <Badge badgeContent={""} color="error">
                    <PersonIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications">
                <IconButton
                  sx={{
                    p: 1,
                    background: "#56565D",
                    borderRadius: "50%",
                    mx: 2,
                  }}
                >
                  <NotificationsIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Logout">
                <IconButton>
                  <LogoutIcon fontSize="large" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
