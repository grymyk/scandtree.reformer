import React from "react";

export default function InputItem({label, input, value, onChange}) {
    let { htmlFor } = label;
    let { title, min, max, step, readonly, type, name, className } = input;

    const handleChange = (event) => onChange(event.target);

    return (
         <>
            <label htmlFor = { htmlFor }>
                { htmlFor }
            </label>
            <input
                id = { name }
                title = { title }
                onChange = { handleChange }
                min = { min }
                max = { max }
                step = { step }
                readOnly = { readonly }
                type = { type }
                className = { className }
                name = { name }
                value = { value }
            />
        </>
    )
}
