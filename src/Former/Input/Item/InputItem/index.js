import React from "react";

export default function InputItem(props) {
    let {label, input, value, onChange} = props;
    let {htmlFor, value: title} = label;
    let {id, min, max, step, readonly, tel, name, className} = input;

    const handleChange = (event) => onChange(event.target);

    return (
         <>
            <label htmlFor={htmlFor}>{title}</label>
            <input
                id = {id}
                onChange = {handleChange}
                min = {min}
                max = {max}
                step = {step}
                readOnly = {readonly}
                type = {tel}
                className = {className}
                name = {name}
                value = {value}
            />
        </>
    )
}
