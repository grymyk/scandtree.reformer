import React from 'react';

import './css/main.scss';
import './css/tree.scss';

import Input from "./Input";
import Tree from "./Tree";

import helper from "./Input/helper";

class Former extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 10,
            width: 30,
            long: 1000,
            trunk: 1,
            branch: 7,
            spread: 36
        };
    }

    handleItemsChange = (input) => this.setState({[input.name]: input.value});

    handleItemsClick = (btn) => {
        const delta = helper.getDelta(btn);

        if (delta) {
            const name = helper.getName(btn);

            this.setState((state) => ({[name]: +state[name] + delta}));
        }
    };

    render() {
        return (
            <div className='scandtree'>
                <Input
                    {...this.state}
                    onBntClick = {this.handleItemsClick}
                    onInputChange = {this.handleItemsChange}
                />
                <Tree {...this.state} />
            </div>
        );
    }
}

export default Former;
