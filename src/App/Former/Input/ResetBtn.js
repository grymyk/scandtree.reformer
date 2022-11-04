import React from 'react'

const reset_btn_cls = {
    margin: '0 0 20px',
    display: 'block',
    overflow: 'hidden',
}

const reset_cls = {
    userSelect: 'none',
    color: '#000',
    cursor: 'pointer'
}

const reset_lock_cls = {
    color: '#aaa',
    cursor: 'text',
}

function ResetBtn({ onClick,  isReset}) {
    const handleClick = () => onClick(1);

    let cls = reset_lock_cls;

    if (isReset) {
        cls = reset_cls;
    }

    return (
        <li style = {reset_btn_cls }>
            <span onClick={ handleClick }
                  style = { cls }> reset
            </span>
        </li>
    )
}

export default ResetBtn;
