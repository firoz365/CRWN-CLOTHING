import React, { Component } from 'react';
import MenuItem from '../menu-item/manu-item.component';
class DirectoryComponent extends Component {

    constructor() {
        super();
        const sections = [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens',
              size:'large'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens',
              size:'large'
            }
          ];

          this.state = {
            sections 
        }
    }

    render() {
        return this.state.sections.map(({id , title , imageUrl , size}) => 
        <MenuItem key={id} title = {title} subtitle = {'SHOPNIOW'} imageUrl = {imageUrl} size={size}/>
        );
    }
}
export default DirectoryComponent;
