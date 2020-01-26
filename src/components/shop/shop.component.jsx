import React from 'react';
import SHOP_DATA1 from './shop.data';
import CollectionPreview from '../preview-collection/collection-preview.component';

class ShopComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA1
        }
    }

    render() {
        // console.log(this.state.collections)

        //return <div><CollectionPreview items={SHOP_DATA1} title={'ssss'}></CollectionPreview></div>;
        // return this.state.collections.map( {id , ...otherProperties } => (<CollectionPreview title={title} {...otherProperties}></CollectionPreview>)

        const { collections } = this.state;

        return (

            < div className='shop-page' >
                {
                    collections
                        .map(({ id, ...otherProps }) => (
                            <CollectionPreview key={id} {...otherProps} />
                        ))
                }
            </div >
        )
    }
}

export default ShopComponent;