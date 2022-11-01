import React from 'react';

import './tree.scss';

import HeadBranch from './HeadBranch'
import BodyBranch from './BodyBranch'

class Tree extends React.Component {
    state = {
        zIndex: 1
    };

    render() {
        let { width, height } = this.props;

        return(
            <div id="tree_holder">
                <ul className = "boardlist">
                    {<HeadBranch
                        height = {height}
                        width = {width}
                        zIndex = {this.state.zIndex}
                    />}
                    {<BodyBranch
                        {...this.props}
                    />}
                </ul>
            </div>
        )
    }
}

export default Tree;
