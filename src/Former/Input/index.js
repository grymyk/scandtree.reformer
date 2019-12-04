import React from 'react'
import Item from "./Item";

import data from './data'

import helper from "./helper";

import './style.scss'

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            height: 10,
            width: 30,
            long: 1000,
            trunk: 1,
            branch: 7,
            spread: 36
        };
    }

    handleHeadClick = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    };

    handleItemsChange = (input) => {
        const value = input.value;
        console.log(value);
        const name = input.name;

        const delta = this.state[input.name][value] - value;
        const inRange = helper.checkDelta(input, value);

        // if (inRange) {
            this.setState({[name]: value});
        // }
    };

    handleItemsClick = (btn) => {
        const delta = helper.getDelta(btn);

        if (delta) {
            const name = helper.getName(btn);

            this.setState((state) => ({[name]: +state[name] + delta}));
        }
    };

    render() {
        const fn = (data) => {
            let {label, input} = data;
            let {id, name} = input;

            return <Item
                label = {label}
                input = {input}
                key = {id}
                value = {this.state[name]}

                onClick = {this.handleItemsClick}
                onChange = {this.handleItemsChange}
            />
        };

        const list = data.map(fn);

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
