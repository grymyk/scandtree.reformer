import React from 'react'

import Trunk from '../Trunk'
import curves from './curves';

const getListBoard = (props) => {
    const twigNum = 2;

    let {
        width: trunkWidth,
        branch: size,
        trunk: trunkNum,
        height
    } = props;

    const getWidthBranch = (index, curve, options) => {
        return curves[curve](index, options);
    };

    let branchNum = twigNum + trunkNum;
    let len = branchNum * size;

    // refactoring
    /*const twig = (index) => (index + twigNum) % branchNum === 0;

    const conditionGen = () => {
        const name = 'twig';
        return {};
    };*/

    const condition = {
        firth: (index) => (index + twigNum + 1) % branchNum === 0,
        second: (index) => (index + twigNum) % branchNum === 0
    };
    // refactoring _^_

    const isTwig = (index) => {
        let status = 0;

        for (let key in condition) {
            status |= condition[key](index)
        }

        return status
    };

    const getIndexTwig = (index) => {
        return (index + twigNum + 1) / branchNum ^ 0;
    };


    const getWidth = (index) => {
        let width = trunkWidth;

        if ( isTwig(index) ) {
            let indexTwig = getIndexTwig(index);
            return  getWidthBranch(indexTwig, 'linear', props);
        }

        return width
    };

    let list = [];
    let i = trunkNum - 1;

    for ( i; i < len; i += 1) {
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
