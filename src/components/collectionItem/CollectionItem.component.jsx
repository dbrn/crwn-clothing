import React from "react";
import "./CollectionItem.style.scss";

const collectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-item__footer">
        <span className="collection-item__footer__name">{name}</span>
        <span className="collection-item__footer__price">{price}</span>
      </div>
    </div>
  );
};

export default collectionItem;
