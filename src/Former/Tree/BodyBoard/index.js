import React from 'react'

import Board from '../Board'

class BodyBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        let {data: {
            width, height, branch
        }} = this.props;

        const listBoard = '';

        return (
            <>
                <Board
                    width = {width}
                    height = {height}
                    branch = {branch}
                 />
            </>
        )}
}

export default BodyBoard;
