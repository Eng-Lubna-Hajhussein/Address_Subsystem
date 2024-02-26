import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  AccountCircle,
  AdUnits,
  AddLocationAlt,
  AdminPanelSettings,
  CheckCircleOutline,
  WhereToVote,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Grid, Icon } from "@mui/material";

const drawerWidth = 240;

const styles = {
  link: {
    textDecoration: "none",
    color: "#555",
  },
};

function ResponsiveDrawer(props) {

  const adminPages = [
    { path: "/", text: "App Regions", icon: <AddLocationAlt /> },
  ];

  const userPages = [
    {
      path: "/selectRegions",
      text: "Select Regions",
      icon: <WhereToVote />,
    },
    {
      path: "/viewRegions",
      text: "View Regions",
      icon: <CheckCircleOutline />,
    },
  ];

  const drawer = (
    <div>
      <Toolbar  />
      <Divider />
      <Grid container py={2} justifyContent={"center"}>
        <AdminPanelSettings color="primary" />
        <Typography>Admin Pages</Typography>
      </Grid>
      <List>
        {adminPages.map(({ text, path, icon }, index) => (
          <Link to={path} style={styles.link}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <Grid container py={2} justifyContent={"center"}>
        <AccountCircle color="primary"  />
        <Typography>User Pages</Typography>
      </Grid>
      <List>
        {userPages.map(({ text, path, icon }, index) => (
          <Link to={path} style={styles.link}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow:"none"
        }}  
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Address Subsystem
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
