import React from "react";

import BtnsItem from "./BtnsItem.js";
import InputItem from "./InputItem.js";

export default function Item(props) {
    let { onClick, ...other } = props;

    return (
        <li>
            <InputItem
                {...other}
            />

            <BtnsItem
                onClick = { onClick }
            />
        </li>
    )
}
