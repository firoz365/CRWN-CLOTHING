import React from 'react';
import './menuitem.style.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, subtitle, imageUrl, size , linkUrl , history , match}) => {

    
    return (
        <div className={`${size} menu-item`} onClick={ ()=> history.push( `${match.url}${linkUrl}`) } >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>


            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span class='sub-title'>SHOP NOW</span>
            </div>
        </div>

    );
}

export default withRouter(MenuItem);
