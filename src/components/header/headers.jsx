import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { APP_NAME } from '../../lib/config';
import { useDispatch } from 'react-redux';
import useTheme from '../../hooks/useTheme';
import { SideNavbarToggleSubject } from '../../lib/rxSubject';
import { removeLocalStorageKey, setLocalStorage } from '../../lib/session';
import { actionThemeChange } from '../../redux/actions/home.action';
import isMobile from '../../hooks/isMobile';
import { open_drawer } from '../../lib/global';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Headers = () => {
  const dispatch = useDispatch()
  const [theme, themeType] = useTheme();
  const [mobileView] = isMobile()
  const Route = useHistory();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [minimize, setMinimize] = useState(false);

  useEffect(()=>{
    SideNavbarToggleSubject.subscribe((flag)=>setMinimize(flag || false))
  },[])

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleThemeChange = () => {
    const newTheme = themeType === "dark" ? "light" : "dark";
    setLocalStorage('theme', newTheme)
    dispatch(actionThemeChange(newTheme))
  }

  const handleLogout = () => {
    handleMenuClose();
    removeLocalStorageKey('token');
    Route.push('/auth')
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleThemeChange}>
        <IconButton><Brightness4Icon/></IconButton>
        {themeType === 'dark' ? "Light Theme": "Dark Theme"}
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton><ExitToAppIcon /></IconButton>
        <Typography>Logout</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
      <MenuItem onClick={handleThemeChange}>
        <IconButton><Brightness4Icon/></IconButton>
        {themeType === 'dark' ? "Light Theme": "Dark Theme"}
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton><ExitToAppIcon /></IconButton>
        <Typography>Logout</Typography>
      </MenuItem>

    </Menu>
  );

  // const handleToggleDrawer = () => {
  //   open_drawer("SIDEBAR", {
  //     paperClass: "backNavMenu"
  //   }, 'right')
  // }

  const handleToggleDrawer = () => {
    if(mobileView){
      open_drawer("SIDEBAR",{
        paperClass: "mv_side_navbar"
      },"right")
    }else{
      SideNavbarToggleSubject.next(!minimize)
    }
  }
  
  return (
    // eslint-disable-next-line
    <div className={`${classes.grow} main-header ${mobileView ? "mobile": "desktop"}`}>
      {!mobileView ? 
      (<AppBar
        style={{
          backgroundColor: theme.headerColor,

        }} 
        className={`header_sidebar ${minimize ? "min" : "max"}`}
        position="static"
      >
        <Typography className={classes.title} variant="h6" noWrap>
              Admin Panel
        </Typography>
      </AppBar>):<></>}

      <AppBar 
        style={{
          backgroundColor: theme.headerColor,

        }} 
        className={`header_body ${minimize ? "min" : "max"}`}
        position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleToggleDrawer}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {mobileView ? (
            <div className="w-100 text-start">
                <h4 className="m-0">{APP_NAME}</h4>
            </div>):<></>}
          <Typography className={classes.title} variant="h5" noWrap>
            {APP_NAME}
          </Typography>
          {/* <div className={classes.search}>
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
          </div> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}

            {/* <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


export default Headers