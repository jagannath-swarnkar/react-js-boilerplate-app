import React, { useEffect, useState } from 'react'
import isMobile from '../../hooks/isMobile';
import useTheme from '../../hooks/useTheme';
import { SideNavbarToggleSubject } from '../../lib/rxSubject';
import Sidebar from '../Drawer/Sidebar';
import Headers from '../header/headers';

const Layout = (props) => {
    const [minimize, setMinimize] = useState(false)
    const [theme] = useTheme();
    const [mobileView] = isMobile()
    useEffect(()=>{
        SideNavbarToggleSubject.subscribe((flag)=>setMinimize(flag || false))
    },[])
    return (
        <React.Fragment>
            <Headers />
            <div id="home-body" className={`home-body d-flex ${mobileView? 'mobile': 'desktop'}`}>
                {!mobileView ? 
                    (<div style={{backgroundColor: theme.drawerBgColor }} className={`home_sidebar ${minimize ? "min":"max"}`}>
                        <Sidebar />
                    </div>):(<></>)}
                <div style={{backgroundColor: theme.bgColor}} className={`home_body ${minimize ? "min":"max"}`}>
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;
