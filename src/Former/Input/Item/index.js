import React from "react";

import BtnsItem from "./BtnsItem";
import InputItem from "./InputItem";

export default function Item(props) {
    let {onClick, ...other} = props;

    return (
        <li data-mode="board" className="mode">
            <InputItem
                {...other}
            />
            <BtnsItem
                onClick = {onClick}
            />
        </li>
    )
}
