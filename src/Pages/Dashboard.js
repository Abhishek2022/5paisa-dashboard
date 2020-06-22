import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Home,ShowChart,ShoppingCart,Settings, PowerSettingsNew, CenterFocusStrong} from '@material-ui/icons'
import HomeFragment from "../Fragments/HomeFragment"
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


import { Select,MenuItem,Link,TextField } from '@material-ui/core';

// render


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: "#fefefe"
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

 
  appBar: {
    // alignItems : 'center',

    zIndex: theme.zIndex.drawer + 1,
    color: 'black',
    backgroundColor : "#e0e0e0",
    textShadow : 'grey',
    textAlign : 'center',
    backgroundImage: "url(https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/v4vapid/9MW59rEj-Stonks7.gif)",
    
  },
  image:{
    height: "70px",
    width: "70px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  whiteColor:{
    color : "#fefefe"
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <img src="https://contacts.zoho.com/file?ot=8&t=serviceorg&ID=62047589" className={classes.image}/>
          <Typography className={classes.title} variant="h4" noWrap>
            5 Paisa
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           
              <ListItem button >
              <Home/>
              <Typography className={classes.root}>
              <Link href="#" color="inherit">
              <ListItemText primary="Home" />
              </Link>
             
            </Typography>
              
              </ListItem>



              <ListItem button >
               <ShoppingCart/>
               
               <ListItemText primary="Order" />
               <Select labelId="label" id="select" value="1">
               
                   <MenuItem value="1">N/A</MenuItem>
              <Typography className={classes.root}>
              <Link href="#" color="inherit">
                <MenuItem value="10">Order Status</MenuItem>
              </Link>
            </Typography>
                   
            <Typography className={classes.root}>
              <Link href="#" color="inherit">
                <MenuItem value="10">Order History</MenuItem>
              </Link>
            </Typography>
            </Select>
        </ListItem>



              <ListItem button >
               <ShowChart/>
                <ListItemText primary="Market Feed" />
                <Select labelId="label" id="select" value="1">
               
                   <MenuItem value="1">N/A</MenuItem>
                   <Typography className={classes.root}>
                      <Link href="#" color="inherit">
                        <MenuItem value="10">W1</MenuItem>
                      </Link>
                  </Typography>
                  <Typography className={classes.root}>
                      <Link href="#" color="inherit">
                        <MenuItem value="10">W2</MenuItem>
                      </Link>
                  </Typography>   
                </Select>
              </ListItem>



              <ListItem button >
               <Settings/>
               <Typography className={classes.root}>
              <Link href="#" color="inherit">
              <ListItemText primary="Settings" />
              </Link>
             
            </Typography>
              </ListItem>




              <Divider/>
              <ListItem button >
               <PowerSettingsNew/>
                <ListItemText primary="LogOut" />
              </ListItem>
          </List>
          <Divider />
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
       <HomeFragment/>
      </main>
    </div>
  );
}
