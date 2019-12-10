import React from 'react'

import Face from "./Face";

const faces = ["front", "back", "right", "left", "top", "bottom"];

function Branch(options) {
    const faceList = faces.map( (face) => {
        return <Face key = {face}
                     face = {face}
                     options = {options}
        />
    });

    return (
        <div className="prism_holder">
            <ul className="prism">{faceList}</ul>
        </div>)
}

export default Branch;
