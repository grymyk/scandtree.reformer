import React from 'react'

import Trunk from '../Trunk'
import curves from './curves';

const getListBoard = (props) => {
    const twigNum = 2;

    let {
        width: trunkWidth,
        branch: size,
        trunk: trunkNum,
        height,
        spread
    } = props;

    const getWidthBranch = (index, curve, options) => {
        return curves[curve](index, options);
    };

    let branchNum = twigNum + trunkNum;
    let len = branchNum * size;


    // refactoring
    const twig = (index) => (index + twigNum) % branchNum === 0;

    const conditionGen = () => {
        const name = 'twig';
        return {};
    };

    const condition = {
        firth: (index) => (index + twigNum + 1) % branchNum === 0,
        second: (index) => (index + twigNum) % branchNum === 0
    };

    // refactoring ^

    const isTwig = (index) => {
        let status = 0;

        for (let key in condition) {
            status |= condition[key](index)
        }

        return status
    };

    const getIndexTwig = (index) => {
        return ((index + twigNum + 1) / branchNum).toFixed(0);
    };

    const getWidth = (index) => {
        let width = trunkWidth;
        let twigCounter = 0;

        if ( isTwig(index) ) {
            // console.log(index);
            console.log(getIndexTwig(index));

            // return width + sprea
            let indexTwig = getIndexTwig(index);
            let more = getWidthBranch(indexTwig, 'linear', props);
            console.log(more);

            return width + more;
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
