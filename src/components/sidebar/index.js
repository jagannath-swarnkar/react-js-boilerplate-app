import React from 'react'
import { StarBorder } from '@material-ui/icons'
import TimelineIcon from '@material-ui/icons/Timeline';


/**
 * @description all sidebar items list
 * Add your sidebar item here in this list
 * @author jagannath
 * @date 09/04/2021
 * @param color String - icon color
 * @return Array of sidebar items 
 */
const sidebarList = (color) => {
    return [
        {
            title: 'Glance',
            icon: <StarBorder style={{color}} />,
            home: true,
            path: '/glance'
        },
        {
            title: 'Analytics',
            icon: <TimelineIcon style={{color}} />,
            home: true,
            path: '/analytics'
        },
        // {
        //     title: "Account",
        //     // icon: <AccountBoxIcon style={{color}} />,
        //     home: false,
        //     children: [
        //         {
        //             title: "Login",
        //             // icon: <LockOpenIcon style={{color}} />,
        //             path: '/'
        //         },
        //         {
        //             title: "Profile",
        //             // icon: <PersonOutlineIcon style={{color}} />,
        //             path: "/profile"
        //         }
        //     ]
        // }
    ]
}

export default sidebarList
