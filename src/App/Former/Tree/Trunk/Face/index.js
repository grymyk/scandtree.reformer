import React from "react";

const planeStyles = {
    front:  (options) => {
        let { width, height,
            translateZ: { zAxis }
        } = options;

        return { width, height,
            transform: "rotateY(0deg) translateZ(" + zAxis + ")"
        }
    },

    back: (options) => {
        let { width, height,
            translateZ: { zAxis }
        } = options;

        return { width, height,
            transform: "rotateX(180deg) translateZ(" + zAxis + ")"
        };
    },

    right: (options) => {
        let { height, left, deep,
            translateZ: { xzAxis }
        } = options;

        return { width: deep,
            height,
            transform: "rotateY(90deg) translateZ(" + xzAxis + ")",
            left
        };
    },

    left: (options) => {
        let { height, left, deep,
            translateZ: { xzAxis }
        } = options;

        return { width: deep,
            height,
            transform: "rotateY(-90deg) translateZ(" + xzAxis + ")",
            left
        };
    },

    top: (options) => {
        let { width, top, deep,
            translateZ: { yAxis }
        } = options;

        return { width,
            height: deep,
            transform: "rotateX(90deg) translateZ(" + yAxis + ")",
            top
        };
    },

    bottom: (options) => {
        let { width, top, deep,
            translateZ: { yAxis }
        } = options;

        return { width,
            height: deep,
            transform: "rotateX(-90deg) translateZ(" + yAxis + ")",
            top
        };
    },
};

const faceCls = (face) => face + " branch side_view";

function Face(props) {
    let { face, options } = props;

    return (
        <li className = {faceCls(face)}
             style = {planeStyles[face](options)} >
        </li>
    )
}

export default Face;
