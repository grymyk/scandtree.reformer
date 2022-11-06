import React from 'react';

import './tree.scss';

import HeadBranch from './HeadBranch.js'
import BodyBranch from './BodyBranch'

function Tree ({ props }) {
    const Z_INDEX = 1

    const { width, height } = props;

    return(
        <div id="tree_holder">
            <ul className = "boardlist">
                {<HeadBranch
                    width = { width }
                    height = { height }
                    zIndex = { Z_INDEX }
                />}

                {<BodyBranch
                    { ...props }
                />}
            </ul>
        </div>
    )

}

export default Tree;
