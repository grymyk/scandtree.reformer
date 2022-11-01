import React from 'react'

import './reset_btn.scss'

function ResetBtn(props) {
    const handleClick = () => props.onClick(1);

    let cls = "reset lock";

    if (props.isReset) {
        cls = "reset";
    }

    return (
        <li className="reset_btn">
            <span onClick={handleClick}
                  className = {cls}> reset
            </span>
        </li>
    )
}

export default ResetBtn;
