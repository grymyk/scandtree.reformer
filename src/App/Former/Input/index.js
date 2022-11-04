import React, { useState } from 'react'
import Item from "./Item";
import ResetBtn from "./ResetBtn.js";

import config from './config'

import './input.scss'

export default function Input({
    onBntClick,
    onInputChange,
    isReset,
    onResetBnt,
    nameIn
}) {
    // state = {
    //     isOpen: true,
    //     isReset: false
    // };

    const [isOpen, setIsOpen] = useState(true);
    // const [isReset, setIsReset] = useState(false);

    // const handleHeadClick = () => {
    //     this.setState((state) => ({
    //         isOpen: !state.isOpen
    //     }));
    // };

    const handleHeadClick = () => {
        setIsOpen( !isOpen );
    };

    // let {
    //     onBntClick,
    //     onInputChange,
    //     isReset,
    //     onResetBnt
    // } = this.props;

    const fn = (data) => {
        let { label, input } = data;
        let { name } = input;

        return <Item
            value = { nameIn }
            label = { label }
            input = { input }
            key = { name }

            onClick = { onBntClick }
            onChange = { onInputChange }
        />
    };

    const list = config.map(fn);

    let clsParams = isOpen ? 'open' : null;

    return (
        <div id="input_params" className = { clsParams }>
            <h4 onClick = { handleHeadClick } >
                Parameters
            </h4>

            <ul>
                { list }
                <ResetBtn
                    onClick = { onResetBnt }
                    isReset = { isReset }
                />
            </ul>
        </div>
    )
    
}
