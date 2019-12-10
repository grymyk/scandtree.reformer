import React from 'react';

import HeadBoard from './HeadBoard'
import BodyBoard from './BodyBoard'

class Tree extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { width, height } = this.props;

        return(
            <div id="tree_holder">
                <ul className = "boardlist">
                    <HeadBoard
                        height = {height}
                        width = {width}
                    />
                    <BodyBoard
                        data = {this.props}
                    />
                </ul>
            </div>
        )
    }
}

export default Tree;
