import React, { Component } from 'react';
import { SHOP_DATA } from "../Constants/Shop.data";
import CollectionPreview from './CollectionPreview.component';
import "../Styles/Collection.style.scss";


class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;