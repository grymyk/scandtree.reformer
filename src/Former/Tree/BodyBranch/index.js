import React from 'react'

import Board from '../Board'

const getListBoard = (props) => {
    let {width, height, branch} = props;
    let list = [];

    for (let i = 1; i <= branch; i += 1) {
        list.push(<Board
            width = {width}
            height = {height}
            zIndex = {-i}
            key = {-i}
        />);
    }

    return list;
};

class BodyBranch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            z_index: 0
        };
    }

    render() {
        const listBoard = getListBoard(this.props);

        return (
            <>
                {listBoard}
            </>
        )}
}

export default BodyBranch;
