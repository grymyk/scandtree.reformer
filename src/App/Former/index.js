import React from 'react';

import Input from "./Input/";
import Tree from "./Tree/";

import helper from "./Input/helper";

const default_data = {
    height: 10,
    width: 20,
    long: 1000,
    twig: 1,
    trunk: 1,
    branch: 12,
    spread: 36,
    isReset: false
};

class App extends React.Component {
    state = default_data;

    handleItemsClick = (btn) => {
        const delta = helper.getDelta(btn);

        if (delta) {
            const name = helper.getName(btn);

            this.setState(
                (state) => ({[name]: +state[name] + delta})
            );

            this.setState({isReset: true});
        }
    };

    handleItemsChange = (input) => {
        let value = +input.value;

        if (value) {
            this.setState({[input.name]: value})
        }
    };

    handleResetBtnClick = () => {
        this.setState(default_data)
    };

    render() {
        return (
            <>
                <div className='scandtree'>
                    <Input
                        {...this.state}
                        onBntClick = {this.handleItemsClick}
                        onInputChange = {this.handleItemsChange}
                        onResetBnt = {this.handleResetBtnClick}
                    />
                    <Tree {...this.state} />
                </div>
            </>
        );
    }
}

export default App;
