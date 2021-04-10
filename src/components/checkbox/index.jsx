import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

/**
 * @description
 * @author Abhishek
 * @date 08/04/2021
 * @param checked:Boolean
 * @param onChange: g()
 */
const CustomCheckbox = ({checked, onChange, label, className}) => {
    return (
        <React.Fragment>
        <FormControlLabel
            control={
            <Checkbox
                checked={checked}
                onChange={onChange}
                name="checked"
                className={className || ''}
            />
            }
            label={label || "checkbox"}
        />
        </React.Fragment>
    );
}

export default CustomCheckbox