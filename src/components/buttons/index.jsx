import React from 'react';

function CustomButtons(props) {
    const {
        type = "button",
        className = '',
        id = '',
        style = {},
        children,
        onClick,
        ...otherProps
    } = props;

    return (
        <React.Fragment>
            <button
                type={type}
                className={`btn btn-default ${className}`}
                id={id || Math.random.toString()}
                onClick={onClick}
                style={style}
                {...otherProps}
            >
                {children}
            </button>
        </React.Fragment>
    )
}

export default CustomButtons
