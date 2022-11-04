import React from "react";

export default function BtnsItem({ onClick }) {
    const handleClick = (event) => onClick(event.target);

    return (
        <div onClick = { handleClick }
            className="voter">
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
