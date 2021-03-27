import React from 'react'
import Headers from '../header/headers';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Headers />
            <div id="home-body" className="home-body">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout;
