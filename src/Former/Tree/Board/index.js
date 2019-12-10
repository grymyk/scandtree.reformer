import React from 'react'

import treeHelper from './treeHelper'

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let cssText = treeHelper.setBoardStyles(zIndex, width);
        let cssText = {zIndex: 0, width: 30, height: 10};

        return (
            <li style={cssText}>
                {treeHelper.getBoardTemplate(this.props)}
            </li>
        )
    }
}

export default Board;

/*
boardElem: (zIndex, width) => {
    let li = document.createElement('LI');

    li.style.cssText = setBoardStyles(zIndex, width);
    li.innerHTML = getBoardTemplate(width);

    return li;
}*/
