import React from 'react'

import Face from "./Face.js";
import boardHelper from "./boardHelper";

const faces = ["front", "back", "right", "left", "top", "bottom"];

function Board(props) {
    let cssText = props;
    let { zIndex } = props;

    let options = boardHelper.getBoardTemplate(props);

    const faceList = faces.map( (face, index) => {
        let key = zIndex + index.toString();

        return <Face key = { key }
                     face = { face }
                     options = { options }
        />
    });

    return (
        <li className="board"
            key = { zIndex }
            style = { cssText }
        >    
            <div className="prism_holder">
                <ul className="prism">{ faceList }</ul>
            </div>
        </li>
    )
}

export default Board;
