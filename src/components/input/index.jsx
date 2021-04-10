import React from 'react'

const Input = (props) => {
    const {
        type="text",
        value="",
        onChange,
        className="",
        style={},
        name,
        id,
        placeholder,
        ...otherProps
     } = props;
    return (
        <input 
            type={type} 
            name={name || "text-input"} 
            id={id || Math.random.toString()}
            value={value}
            onChange={onChange}
            className={`cus_class ${className || ""}`}
            placeholder={placeholder || 'Enter something'}
            style={style}
            {...otherProps}
            />
    )
}

export default Input
