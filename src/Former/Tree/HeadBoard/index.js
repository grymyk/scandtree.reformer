import React from 'react'

import Board from '../Board'

class HeadBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props)

        let {width, height} = this.props;

        return (
            <>
                <Board
                    width = {width}
                    height = {height}
                />
            </>
        )}
}

export default HeadBoard;
