import React from 'react';
import {Avatar} from '@material-ui/core';
var randomColor = require('randomcolor')(); 

/**
 * @description Component for profile avatar
 * @param width avatar width
 * @param height avatar height
 * @param profilePic avatar image
 * @param color avatar background color
 * @param children you can add text as children 
 */
const AvatarImg = (props) => {
    const {width, height, profilePic, color} = props;
    
    return (
        <React.Fragment>
            <Avatar 
                src={profilePic}
                className={"profile_avatar"}>
                {props.children}
            </Avatar>  
            <style jsx="true">{`
                .profile_avatar{
                    width: ${width || '60px'};
                    height: ${height || '60px'};
                    background-color: ${color || randomColor};
                    font-weight: bold;
                }
            `}</style>
        </React.Fragment>
    )
}

export default AvatarImg