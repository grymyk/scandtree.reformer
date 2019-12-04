import React from "react";

export default function BtnsItem(props) {
    const handleClick = (event) => props.onClick(event.target);

    return (
        <div onClick={handleClick} className="voter">
            <span
                data-sign="minus"
                className="btn down">−
            </span>
            <span
                data-sign="plus"
                className="btn up">+
            </span>
        </div>
    )
}
