import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/manu-item.component'
import Directory from '../../components/directory/directory.component'
import SHOP_DATA from '../../components/shop/shop.data'
const HomePage = () => {
       return (
        <div className='homepage'>
            <div className='directory-menu'>
                <Directory/>
            </div>
        </div>
    );
}

export default HomePage;