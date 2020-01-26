import React from 'react';
import './collection-preview.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>


        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items.filter((items, index) => index < 4)
                    .map(({ id, ...otherProps }) => (
                        <CollectionItem key={id} {...otherProps} className='preview' />)
                    )
            }
        </div>

    </div>
)


export default CollectionPreview;