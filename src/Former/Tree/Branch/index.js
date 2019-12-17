import React from 'react'

import treeHelper from './treeHelper'
// import Board from "./Board";

class Branch extends React.Component {
    constructor(props) {
        super(props);

        // let z_index = 0;

        this.state = {
            branch_id: 0,
            z_index: 0
        };
    }

    render() {
        // let cssText = treeHelper.setBoardStyles(zIndex, width);
        // let cssText = {zIndex: 0, width: 30, height: 10};
        let cssText = {width: 30, height: 10};
        let options = treeHelper.getBoardTemplate(this.props);
        console.log(options)

        return (
            <li zIndex = {this.state.z_index} style = {cssText}>
                {/*<Board {...options} branch_id = {this.state.branch_id}  />*/}
            </li>
        )
    }
}

// export default Branch;

/*
boardElem: (zIndex, width) => {
    let li = document.createElement('LI');

    li.style.cssText = setBoardStyles(zIndex, width);
    li.innerHTML = getBoardTemplate(width);

    return li;
}*/
