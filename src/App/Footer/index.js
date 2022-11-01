import React from 'react'

import './footer.scss';

function Footer() {
    const name = 'myko@grymyk.com';
    const year = '2021';

    return (
        <div className="footer">
            <a href={`mailto:${name}`}
                aria-label="Send letter to developer">
                {name}
            </a>
            <span>{` ©${year}`}</span>
        </div>
    )
}

export default Footer;
