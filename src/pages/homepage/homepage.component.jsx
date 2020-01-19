import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/manu-item.component'
import DirectoryComponent from '../../components/directory/directory.component'

const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                {/* <MenuItem title={'HATS'} subtitle={'SHOP NOW'}/>
                <MenuItem title={'JACKETS'} subtitle={'SHOP NOW'}/>
                <MenuItem title={'SNEAKERS'} subtitle={'SHOP NOW'}/>
                <MenuItem title={'WOMENS'} subtitle={'SHOP NOW'}/>
                <MenuItem title={'MENS'} subtitle={'SHOP NOW'}/> */}
                <DirectoryComponent/>
            </div>
        </div>
    );
}

export default HomePage;