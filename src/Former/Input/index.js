import React from 'react'
import Item from "./Item";

import config from './config'

import './style.scss'

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
       };
    }

    handleHeadClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    };

    render() {
        let { onBntClick, onInputChange } = this.props;

        const fn = (data) => {
            let {label, input} = data;
            let {name} = input;

            return <Item
                label = {label}
                input = {input}
                key = {name}

                onClick = {onBntClick}
                onChange = {onInputChange}
                value = {this.props[name]}
            />
        };

        const list = config.map(fn);

        let cls = this.state.isOpen ? 'open' : null;

        return (
            <div id="input_params" data-owner="admin" className={cls}>
                <h4
                    onClick = {this.handleHeadClick}
                    data-action="toggle">
                    Input
                </h4>
                <ul data-action="toggle">
                    {list}
                </ul>
            </div>
        )
    }
}
