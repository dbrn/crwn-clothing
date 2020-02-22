import React from "react";
import "./Preview-collection.style.scss";
import CollectionItem from "../collectionItem/CollectionItem.component.jsx";

class PreviewCollection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="collection-preview">
        <h1 className="title">{this.props.title.toUpperCase()}</h1>
        <div className="preview">
          {this.props.items
            .filter((item, i) => i < 4)
            .map(({ id, ...itemProps }) => {
              return <CollectionItem key={id} {...itemProps} />;
            })}
        </div>
      </div>
    );
  }
}

export default PreviewCollection;
