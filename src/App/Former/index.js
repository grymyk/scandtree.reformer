import React, { useState } from 'react';

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

function Former() {
    // state = default_data;

    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(10);
    const [long, setLong] = useState(1000);
    const [twig, setTwig] = useState(1);
    const [trunk, setTrunk] = useState(1);
    const [branch, setBranch] = useState(12);
    const [spread, setSpread] = useState(36);
    const [isReset, setIsReset] = useState(false);

    const state = {
        width,
        height,
        long,
        twig,
        trunk,
        branch,
        spread,
        isReset
    }

    const handleItemsClick = ( btn ) => {
        const delta = helper.getDelta(btn);

        if ( delta ) {
            const btnName = helper.getName(btn);
            console.log(delta)

            // this.setState(
            //     (state) => ({[btnName]: +state[btnName] + delta})
            // );

            this.setState(
                (state) => ({[btnName]: Number( state[btnName] ) + delta})
            );

            // this.setState({isReset: true});
            setIsReset(true);
        }
    };

    const handleItemsChange = ( input ) => {
        let value = Number(input.value);

        if ( value ) {
            this.setState({[input.name]: value})
        }
    };

    const handleResetBtnClick = () => {
        this.setState(default_data)
    };

    return (
        <>
            <div className = "scandtree">
                <Input
                    props = { state }
            
                    onBntClick = { handleItemsClick }
                    onInputChange = { handleItemsChange }
                    onResetBnt = { handleResetBtnClick }
                />
                
                <Tree props = { state } />
            </div>
        </>
    );
}

export default Former;
