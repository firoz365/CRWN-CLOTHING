import React from 'react';
import './menuitem.style.scss'

const MenuItem = ({ title, subtitle, imageUrl, size }) => {

    return (
        <div className={`${size} menu-item`} >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>


            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span class='sub-title'>{subtitle.toUpperCase()}</span>
            </div>
        </div>

    );
}

export default MenuItem;
