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
              linkUrl: 'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'womens',
              size:'large'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'mens',
              size:'large'
            }
          ];

          this.state = {
            sections 
        }
    }

    render() {
        return this.state.sections.map(({id , ...otherProps}) => 
        <MenuItem key={id} {...otherProps} />
        );
    }
}
export default DirectoryComponent;
