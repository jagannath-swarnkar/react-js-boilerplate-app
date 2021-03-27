import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

const Shimmer = (props) => {
    const { 
        variant="rect",
        width,
        height,
        ...others
    } = props;

    return (
        <React.Fragment>
            <Skeleton 
                variant={variant} 
                width={width} 
                height={height} 
                style={{

                }}
                {...others}
                />
        </React.Fragment>
    )
}

export default Shimmer
