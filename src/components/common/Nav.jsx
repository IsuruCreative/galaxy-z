import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  });

  const navigate = useNavigate();

  const { login, register, isAuthenticated, user, logout } = useKindeAuth();

  const { mobileView, drawerOpen } = state;

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Galaxy Z</Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            sx={{
              ":hover": {
                borderBottom: "3px solid white",
              },
            }}
            onClick={() => navigate("/notifications")}
            color="inherit"
          >
            Notifications
          </Button>
          <Button
            sx={{
              ":hover": {
                borderBottom: "3px solid white",
              },
            }}
            color="inherit"
            onClick={() => navigate("/mars")}
          >
            Mars Photos
          </Button>

          {!isAuthenticated && (
            <>
              <Button
                sx={{
                  ":hover": {
                    borderBottom: "3px solid white",
                  },
                }}
                variant="text"
                onClick={register}
                color="inherit"
              >
                Register
              </Button>
              <Button
                sx={{
                  ":hover": {
                    borderBottom: "3px solid white",
                  },
                }}
                onClick={login}
                color="inherit"
              >
                Log In
              </Button>
            </>
          )}

          {isAuthenticated && (
            <>
              <Typography sx={{color: "#0B3D91"}} variant="h6">Galaxy Z</Typography>
              <Divider />
              <Button color="inherit" onClick={logout}>
                Log Out
              </Button>
              <IconButton color="inherit">
                <Avatar src={user.picture} />
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Galaxy Z</Typography>

        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <List sx={{ minWidth: "60vw", m: 2 }}>
        {isAuthenticated && (
          <>
            <IconButton color="inherit">
              <Avatar src={user.picture} />
            </IconButton>
            <Button color="inherit" onClick={logout}>
              Log Out
            </Button>
          </>
        )}

        {["notifications", "mars"].map((text, index) => (
          <ListItem onClick={() => navigate(text)} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {!isAuthenticated && (
          <>
            <Button
              sx={{ width: "100%", my: 2, borderRadius: 0 }}
              variant="contained"
              onClick={login}
              type="button"
            >
              Log In
            </Button>

            <Divider />

            <Typography variant="body2" sx={{ my: 2 }}>
              Don't have account? create one
            </Typography>

            <Button
              sx={{ width: "100%", my: 2, borderRadius: 0 }}
              onClick={register}
              variant="outlined"
              type="button"
            >
              Register
            </Button>

            <Divider />
          </>
        )}
      </List>
    );
  };

  return (
    <div>
      <AppBar position="static">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
}
