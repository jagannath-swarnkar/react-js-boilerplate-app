import React from 'react'
import Select from 'react-select';

/**
 * @description Manual customized dropdown for slecect opetion
 * @author Jagannath
 * @date 2020-11-10
 * @param props Object 
 * @param options: Array[{label: String, value: String}]
 * @param value: Object {label: String, value: String}
 * @param onChange: Function
 * @param placeholder?: String
 * @param isClearable?: Boolean
 * @param isDisabled?: Boolean
 * @param defaultValue?: Object{label: Stiring, value: String}
 * @param isSearchable?: Boolean
 * @param isRtl?: Boolean (dropdown value from right to left)
 * @param isMulti?: Boolean ( for multiple selection )
 * @param style?: Object
 * @param className?: String
 */
const SelectDropdown = (props) => {
    return (
        <Select
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder || "select..."}
            options={props.options}
            isClearable={props.isClearable}
            isDisabled={props.isDisabled}
            defaultValue={props.defaultValue}
            isSearchable={props.isSearchable}
            isRtl={props.isRtl}
            isMulti={props.multiple || false}
            style={props.styles}
            className={props.className}
            // hideSelectedOptions={true}
        />
    )
}

export default SelectDropdown;
