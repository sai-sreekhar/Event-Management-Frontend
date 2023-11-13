import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router";
import { toCamelCase } from "../utils/toCamelCase";

const pages = ["Home", "Services", "Testinomials", "Contact", "Dashboard"];

function HomeNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const adbIconDesktopView = React.useMemo(() => {
    return { display: { xs: "none", md: "flex" }, mr: 1 };
  }, []);
  const adbIconMobileView = React.useMemo(() => {
    return { display: { xs: "flex", md: "none" }, mr: 1 };
  }, []);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navMenuOnClickHandler = (event) => {
    handleCloseNavMenu();

    const pageIndex = pages.findIndex(
      (page) => event.target.textContent === page
    );

    if (pageIndex !== -1) {
      if (pageIndex === 0) {
        navigate(`/`);
      } else {
        navigate(`/${toCamelCase(pages[pageIndex])}`);
      }
    } else {
      console.log("Invalid page index");
    }
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* // This is the logo for the desktop view */}
          <AdbIcon sx={adbIconDesktopView} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Event Whiz
          </Typography>

          {/* This is the hamburger menu for the mobile view */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
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
                <MenuItem key={page} onClick={navMenuOnClickHandler}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*This is the logo for the mobile view */}
          <AdbIcon sx={adbIconMobileView} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Event Whiz
          </Typography>
          {/* // This is the navigation menu for the desktop view */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={navMenuOnClickHandler}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HomeNavBar;
