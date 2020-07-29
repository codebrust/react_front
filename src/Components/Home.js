import React from 'react';
import clsx from 'clsx';

import {BrowserRouter, Redirect,Link, Route,Switch} from 'react-router-dom'

import AddStudent from './AddStudent'
import ListStudent from './ListStudent'

import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import {
    InputBase,
    Menu,
    MenuItem,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    List,
    Toolbar,
    AppBar,
    CssBaseline,
    Drawer,
    IconButton
} from '@material-ui/core';

import {
    AccountCircle,
    Mail as MailIcon,
    Person as PersonAd,
    PersonAdd,
    People,
    Wc,
    ScatterPlot,
    Settings,
    Search as SearchIcon,
    MoveToInbox as InboxIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Menu as MenuIcon,
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title:{
      flexGrow:1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
          display:'block',
      },
  },
  search:{
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor : fade(theme.palette.common.white,0.15),
      '&:hover':{
          backgroundColor: fade(theme.palette.common.white,0.25),
      },
      marginLeft: 0,
      marginRight: 8,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },

  },
  searchIcon: {
    width: theme.spacing(7),
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
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [auth, setAuth] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedMenu, setSelectedMenu] = React.useState(0);
  const menuOpen = Boolean(anchorEl);
  const [menus, setMenu]=React.useState([
    {name:'Add Person',active:true},
    {name:'List Person',active:false}])

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleSelectMenu(event){
    console.log(event);
    // setSelectedMenu(event.value);
  }

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>


          <Typography className={classes.title} variant="h6" noWrap>
            Digi School
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

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={menuOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}

        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <List>
          {['Add Student','List Students','List School','Trainer List','Digi Courses'].map((text, index) => (
            <Link to="/home/list">
            <ListItem selected={selectedMenu===index?true:false} 
            button key={text}
            onClick = {()=>{
            setSelectedMenu(index);
            }}>
            <ListItemIcon>{index === 0 ? <PersonAdd /> :
               index === 1 ? <People /> : 
               index === 2 ? <Wc /> : <ScatterPlot />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            </Link>
          ))}

        </List>
        
        <Divider />
        <List>
          {['About'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Settings /> : <Settings />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>


      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <BrowserRouter>
        <Switch>
            <Route exact path="/home" component = {AddStudent}/>
            <Route path="/home/list" component = {ListStudent}/>
            <Route path="" component={(function Error(){return(<div>404 Page Not Found</div>)})} />
        </Switch>
        </BrowserRouter>
      </main>
    </div>
    </BrowserRouter>
  );
}
