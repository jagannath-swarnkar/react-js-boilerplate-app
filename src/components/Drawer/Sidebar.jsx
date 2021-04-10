import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavLink, useHistory } from 'react-router-dom';
import sidebarList from '../sidebar';
import useTheme from '../../hooks/useTheme';
import { SideNavbarToggleSubject } from '../../lib/rxSubject';
import { ListItemText } from '@material-ui/core';
import isMobile from '../../hooks/isMobile';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Sidebar = () => {
  const [theme] = useTheme()
  const [mobileView] = isMobile()
  const classes = useStyles();
  const [open, setOpen] = React.useState({});
  const [minimize, setMinimize] = useState( false);
  const Route = useHistory()
  const {pathname=""} = Route.location;

  useEffect(()=>{
    SideNavbarToggleSubject.subscribe((flag)=>setMinimize(flag || false))
  },[])

  const handleClick = (title, item) => {
    if(mobileView) return;
    if(minimize){
      SideNavbarToggleSubject.next()
    }
    setOpen(prev=>{
        return {
            ...prev,
            [title]: !prev[title]
        }
    });
    if(item.path){
      Route.push(item.path)
    }
  };

  const itemList = sidebarList(theme.iconColor)
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      style={{
          color: theme.textColor,
          backgroundColor: theme.drawerBgColor,
          boxShadow: theme.drawerShadow,
          height: "100%"
      }}
      className={classes.root}
    >
      {itemList.map((item,index)=>{
          return (
              <React.Fragment key={index}>
                <ListItem 
                  className={`d-flex justify-content-between side_nav_item ${pathname === item.path ? 'active' : ''}`} 
                  button 
                  onClick={()=>handleClick(item.title, item)}>
                    <span 
                      className="d-flex sidebar nav__link" 
                      style={{color: theme.textColor}}>
                        <ListItemIcon style={{color: pathname === item.path ? "#fff" : theme.iconColor}}>
                            {item.icon}
                        </ListItemIcon>
                        {!minimize && <ListItemText className="nav_item_text" primary={item.title} />}
                    </span>
                    { !minimize && item.children && item.children.length ? (open[item.title] ? <ExpandLess/> : <ExpandMore/>) : null}
                </ListItem>
                {item.children && item.children.map((childItem,childIndex)=>{
                    return (
                        <Collapse key={childItem.title + childIndex} in={open[item.title]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <NavLink  style={{color: theme.textColor}} className="d-flex sidebar nav__link" to={{pathname: childItem.path}}>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon 
                                      style={{color: pathname === item.path ? "#fff" : theme.iconColor}}>
                                        {childItem.icon}
                                    </ListItemIcon>
                                    {!minimize && <ListItemText className="nav_item_text" primary={childItem.title} />}
                                </ListItem>
                            </NavLink>
                            </List>
                        </Collapse>
                    )
                })}
              </React.Fragment>
          )
      })}

    </List>
  );
}

export default Sidebar;