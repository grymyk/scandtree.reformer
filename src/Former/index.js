import React from 'react';

import './css/main.scss';

import Header from "./Header";
import Input from "./Input";
import Tree from "./Tree";
import Link from "./Link";
import Footer from "./Footer";

import helper from "./Input/helper";

const default_data = {
    height: 4,
    width: 20,
    long: 1000,
    twig: 1,
    trunk: 1,
    branch: 12,
    spread: 36,
    isReset: false
};

class Former extends React.Component {
    constructor(props) {
        super(props);

        this.state = default_data;
    }

    handleItemsClick = (btn) => {
        const delta = helper.getDelta(btn);

        if (delta) {
            const name = helper.getName(btn);

            this.setState((state) => ({[name]: +state[name] + delta}));

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
                <Header />
                <div className='scandtree'>
                    <Input
                        {...this.state}
                        onBntClick = {this.handleItemsClick}
                        onInputChange = {this.handleItemsChange}
                        onResetBnt = {this.handleResetBtnClick}
                    />
                    <Tree {...this.state} />
                </div>
                <Link />
                <Footer />
            </>
        );
    }
}

export default Former;
