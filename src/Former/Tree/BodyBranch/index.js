import React from 'react'

import Trunk from '../Trunk'

const getListBoard = (props) => {
    const twigNum = 2;
    let {
        width: trunkWidth,
        branch: size,
        trunk: trunkNum,
        height,
        spread
    } = props;

    let branchNum = twigNum + trunkNum;
    let len = branchNum * size;


    const twig = (index) => (index + twigNum) % branchNum === 0;

    const conditionGen = () => {
        const name = 'twig';

        return {

        };
    };

    const condition = {
        firth: (index) => (index + twigNum + 1) % branchNum === 0,
        second: (index) => (index + twigNum) % branchNum === 0
    };

    const isTwig = (index) => {
        let status = 0;

        for (let key in condition) {
            status |= condition[key](index)
        }

        return status
    };

    const getWidth = (index) => {
        let width = trunkWidth;

        if ( isTwig(index) ) {
            return width + spread
        }

        return width
    };


    console.log('len', len);

    let list = [];

    for (let i = 1; i <= len; i += 1) {
        let trunk = <Trunk
            width = {getWidth(i)}

            height = {height}
            zIndex = {-i}
            key = {-i}
        />;

        list.push(trunk);
    }

    return list;
};

function BodyBranch(props) {
    const listBoard = getListBoard(props);

    return (
        <>
            {listBoard}
        </>
    )
}

export default BodyBranch;
