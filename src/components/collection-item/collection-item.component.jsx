import React  from 'react';
import './collection-item.style.scss'; 

const CollecitonItem = ({ id, name, imageUrl, price }) => (
<div className='collection-item'>
        <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div>

            <div className='colleciton-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

        </div>
    </div>
)
    
export default CollecitonItem;