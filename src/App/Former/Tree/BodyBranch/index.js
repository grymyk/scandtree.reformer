import React from 'react'

import Trunk from '../Trunk'
import curves from './curves';

const getListBoard = (props) => {
    let {
        width: trunkWidth,
        branch: size,
        twig: twigNum,
        trunk: trunkNum,
        height
    } = props;

    const getWidthBranch = (index, curve, options) => {
        return curves[curve](index, options);
    };

    let branchNum = twigNum + trunkNum;
    let len = branchNum * size;

    // refactoring -\|-
    /*const twig = (index) => (index + twigNum) % branchNum === 0;

    const conditionGen = () => {
        const name = 'twig';
        return {};
    };*/

    const condition = {
        first: (index) => (index + twigNum + 1) % branchNum === 0,
        // second: (index) => (index + twigNum) % branchNum === 0
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

    const getDelta = (spread, height) => {
        const MAX_SPREAD = 179;
        const degreeToRadian = (degree) => Math.PI / 180 * degree;

        if (0 < spread && spread < MAX_SPREAD) {
            return degreeToRadian(spread) * height;
        }

        return 0;
    }

    const getWidth = (index) => {
        // console.log('index', index)

        const {spread, height} = props;

        const delta = getDelta(spread, height);

        const degree = 1.8;

        const opts = {
            delta,
            width: trunkWidth,
            height,
            degree
        };

        let width = trunkWidth;

        if ( isTwig(index) ) {
            // console.log('tw index', index)
            let indexTwig = getIndexTwig(index);

            // console.log( getWidthBranch(indexTwig, 'polynom', opts) );
            return getWidthBranch(indexTwig, 'polynom', opts);

            // console.log( getWidthBranch(indexTwig, 'linear', opts) );
            // return getWidthBranch(indexTwig, 'linear', opts);

            // console.log( getWidthBranch(indexTwig, 'eggCurve', props) );
            // return getWidthBranch(indexTwig, 'eggCurve', props);

            // console.log(getWidthBranch(indexTwig, 'circle', props))
            // return getWidthBranch(indexTwig, 'circle', props);
        }

        return width
    };

    let list = [];
    let i = trunkNum - 1;

    for ( i; i < len; i += 1 ) {
        let trunk = <Trunk
            width = { getWidth(i) }

            height = { height }
            zIndex = { -i }
            key = { -i }
        />;

        list.push(trunk);
    }

    return list;
};

function BodyBranch(props) {
    const listBoard = getListBoard(props);

    return (
        <>
            { listBoard }
        </>
    )
}

export default BodyBranch;
