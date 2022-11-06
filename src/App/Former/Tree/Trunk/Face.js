import React from "react";

const planeStyles = {
    front:  ({ width, height, translateZ }) => {
        let { zAxis } = translateZ;

        return {
            width,
            height,
            transform: `rotateY(0deg) translateZ( ${zAxis} )`
        }
    },

    back: ({ width, height, translateZ }) => {
        let { zAxis } = translateZ;

        return {
            width,
            height,
            transform: `rotateX(180deg) translateZ( ${zAxis} )`
        };
    },

    right: ({ height, left, deep, translateZ }) => {
        let { xzAxis } = translateZ;

        return {
            width: deep,
            height,
            transform: `rotateY(90deg) translateZ( ${xzAxis} )`,
            left
        };
    },

    left: ({ height, left, deep, translateZ }) => {
        let { xzAxis } = translateZ;

        return {
            width: deep,
            height,
            transform: `rotateY(-90deg) translateZ( ${xzAxis} )`,
            left
        };
    },

    top: ({ width, top, deep, translateZ }) => {
        let { yAxis } = translateZ;

        return {
            width,
            height: deep,
            transform: `rotateX(90deg) translateZ( ${yAxis} )`,
            top
        };
    },

    bottom: ({ width, top, deep, translateZ }) => {
        let { yAxis } = translateZ;

        return {
            width,
            height: deep,
            transform: `rotateX(-90deg) translateZ( ${yAxis} )`,
            top
        };
    },
};

const faceCls = ( face ) => face + " branch side_view";

function Face({ face, options }) {
    return (
        <li className = { faceCls(face) }
             style = { planeStyles[face](options) } >
        </li>
    )
}

export default Face;
