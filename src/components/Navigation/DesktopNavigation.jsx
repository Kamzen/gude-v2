import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Outlet } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import DeckIcon from "@mui/icons-material/Deck";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import SellIcon from "@mui/icons-material/Sell";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Avatar, Badge, Button, Stack, TextField } from "@mui/material";
import logo from "../../App Images/gude-logo.png";
import { deepPurple } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  width: 100
  // [theme.breakpoints.up("sm")]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function DesktopNavigation() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ backgroundColor: "#FFFFFF" }}
      >
        <Stack height={60} direction="row" border={3} width="100%">
          <Stack
            height="100%"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding={1}
            width={100}
          >
            <img src={logo} alt="Gude Logo" width="100%" height="100%" />
          </Stack>
          <Stack width={`calc(100% - 100px)`} direction="row">
            <Stack
              flex={1}
              height="100%"
              alignItems="center"
              padding={2}
              direction="row"
            >
              <TextField
                name="search"
                variant="outlined"
                placeholder="Search Items"
                size="small"
                fullWidth
                sx={{
                  // width: "70%",
                  [`& fieldset`]: {
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderRight: 0
                  }
                }}
              />
              <IconButton
                sx={{
                  border: 1,
                  borderRadius: 0,
                  borderBottomLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: "50%",
                  backgroundColor: "secondary.main"
                }}
              >
                <SearchIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Stack>
            <Stack
              flex={1}
              height="100%"
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={1}
            >
              <Button
                variant="contained"
                startIcon={<SellIcon />}
                sx={{ fontWeight: "bolder" }}
              >
                Sell On Gude
              </Button>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <MarkunreadIcon sx={{color: 'secondary.main'}} />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon sx={{color: 'secondary.main'}} />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <FavoriteIcon sx={{color: 'secondary.main'}} />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="primary">
                  <LocalMallIcon sx={{color: 'secondary.main'}} />
                </Badge>
              </IconButton>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>N</Avatar>
            </Stack>
          </Stack>
        </Stack>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {/* <ChevronRightIcon color="primary" /> */}
            {open && <ChevronLeftIcon color="primary" />}
          </IconButton>
        </DrawerHeader>
        <Stack
          // justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "#F2F3F4", height: "100%" }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ border: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <DevicesIcon fontSize="small" />
            <Typography>Electronics</Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ borderBottom: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <DeckIcon fontSize="small" />
            <Typography>Outdoors</Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ borderBottom: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <SportsEsportsIcon fontSize="small" />
            <Typography>Gaming</Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ borderBottom: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <AcUnitIcon fontSize="small" />
            <Typography>Freebies</Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ borderBottom: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <MicrowaveIcon fontSize="small" />
            <Typography>Appliances</Typography>
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            // sx={{ borderBottom: 1, borderColor: "lightgray" }}
            width="100%"
            padding={2}
          >
            <MenuBookIcon fontSize="small" />
            <Typography>Stationery</Typography>
          </Stack>
        </Stack>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
