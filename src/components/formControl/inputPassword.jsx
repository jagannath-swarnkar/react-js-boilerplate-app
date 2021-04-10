import React, { useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './style.css';

// phone input password
const InputPassword = (props) => {
  const [visible, setVisible] = useState(false);
  const { 
    error, 
    handleChange, 
    classes, 
    iconFs,
    ...otherProps 
  } = props;

  return (
      <div className="">
        <input
          type={visible ? "text" : "password"}
          onChange={(e)=>handleChange(e.target.value)}
          className={
            `form-text-input mx-0 ${classes} ${
                error ? 'invalid' : ''
            }`
          } 
          {...otherProps}
        />

        <i onClick={()=>setVisible(!visible)}
          className="eyeIcon">
            { visible ? 
              <Visibility style={{fontSize: iconFs || '34px'}} />
              : <VisibilityOff style={{fontSize: iconFs || '34px'}} />
            }
        </i>
      </div>
  );
};

export default InputPassword;
