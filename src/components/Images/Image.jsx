import React from 'react'

const Image = ({
    src,
    width,
    height,
    alt,
    className,
    style,
    onClick,
    placeholder=""
}) => {
    return (
        <React.Fragment>
            <img 
                src={src} 
                width={width || 'auto'}
                height={height || 'height'}
                alt={alt || "Image" }
                className={className}
                style={style}
                onClick={onClick}
                onError={(e)=>e.target.src=placeholder}
                />
        </React.Fragment>
    )
}

export default Image
