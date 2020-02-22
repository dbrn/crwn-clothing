import React from "react";
import SHOP_DATA from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/Preview-collection.component.jsx";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(collection => {
          return (
            <PreviewCollection
              title={collection.title}
              items={collection.items}
              key={collection.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Shop;
