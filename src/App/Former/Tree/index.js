import React from 'react';

import './tree.scss';

import HeadBranch from './HeadBranch.js'
import BodyBranch from './BodyBranch'

function Tree (props) {
    const zIndex = 1

    const { width, height } = props;

    return(
        <div id="tree_holder">
            <ul className = "boardlist">
                {<HeadBranch
                    width = { width }
                    height = { height }
                    zIndex = { zIndex }
                />}

                {<BodyBranch
                    {...props}
                />}
            </ul>
        </div>
    )

}

export default Tree;
