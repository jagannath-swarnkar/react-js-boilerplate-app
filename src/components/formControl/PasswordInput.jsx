import React, { useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './style.css';

// phone input password
const PasswordInput = (props) => {
  const [visible, setVisible] = useState(false);
  const { 
    error, 
    handleChange, 
    classes, 
    iconFs,
    ...otherProps 
  } = props;



  return (
        <div className="d-flex w-100 pwd_inp_div">
            <input
            type={visible ? "text" : "password"}
            onChange={(e)=>handleChange(e.target.value)}
            className={`form-text-input m-0 ${classes} ${error ? 'invalid' : ''}` } 
            {...otherProps}
            />

            <i onClick={()=>setVisible(!visible)} className="pwd_inp_icon">
                { visible ? 
                <Visibility style={{fontSize: iconFs || '28px'}} />
                : <VisibilityOff style={{fontSize: iconFs || '28px'}} />
                }
            </i>
        </div>
  );
};

export default PasswordInput;
