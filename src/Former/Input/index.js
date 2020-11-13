import React from 'react'
import Item from "./Item";
import ResetBtn from "./ResetBtn";

import config from './config'

import './input.scss'

export default class Input extends React.Component {
    state = {
        isOpen: true,
        isReset: false
    };

    handleHeadClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    };

    render() {
        let {
            onBntClick,
            onInputChange,
            isReset,
            onResetBnt
        } = this.props;

        const fn = (data) => {
            let {label, input} = data;
            let {name} = input;

            return <Item
                value = {this.props[name]}
                label = {label}
                input = {input}
                key = {name}

                onClick = {onBntClick}
                onChange = {onInputChange}
            />
        };

        const list = config.map(fn);

        let clsParams = this.state.isOpen ? 'open' : null;

        return (
            <div id="input_params" className={clsParams}>
                <h4 onClick = {this.handleHeadClick} >
                    Parameters
                </h4>
                <ul>
                    {list}
                    <ResetBtn
                        onClick = {onResetBnt}
                        isReset = {isReset}
                    />
                </ul>
            </div>
        )
    }
}
