import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import Wrapper from '../../hoc/Wrapper';
import ChatIcon from '@material-ui/icons/Chat';
import MapIcon from '@material-ui/icons/Map';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AvatarImg from '../Images/AvatarImg';

const Sidebar = () => {
    return (
        <Wrapper>
            <div className="side_nav_menu">
                <div className="row m-0 flex-nowrap align-items-center">
                    <div className="col-12 p-0 m-2 row">
                        <AvatarImg width="60px" height="60px" >KL</AvatarImg>
                        <div className="px-3">
                            <p className="profileName m-0">
                                Katherine
                            </p>
                            <p className="text-muted">
                                katherine.langford
                            </p>
                        </div>
                    </div>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                        <ListItemText primary={"Profile"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ExploreIcon/></ListItemIcon>
                        <ListItemText primary={"Explore"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ChatIcon/></ListItemIcon>
                        <ListItemText primary={"Chat"} />
                    </ListItem> 
                </List>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon><EmailIcon/></ListItemIcon>
                        <ListItemText primary={"Contact"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><MapIcon/></ListItemIcon>
                        <ListItemText primary={"Address"} />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><CreditCardIcon/></ListItemIcon>
                        <ListItemText primary={"Cards"} />
                    </ListItem>
                    
                </List>
            </div>
            <style jsx="true">{`
                .side_nav_menu{
                    width: 100%;
                    height: 100vh;
                    position: relative;
                    float: right;
                }
                .profileName{
                    font-size: 5.266vw;
                    font-family: "Avenir-Roman", sans-serif !important;
                    text-transform: capitalize;
                    font-weight: bold;
                }
            `}</style>
        </Wrapper>
    )
}

export default Sidebar
