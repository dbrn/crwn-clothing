import React from "react";
import "./Homepage.styles.scss";
import Directory from "../../components/directory/Directory.component.jsx";

const homepage = props => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default homepage;
