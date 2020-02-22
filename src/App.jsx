import React from "react";
import { Route } from "react-router-dom";
import Shop from "./pages/shop/Shop.component.jsx";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact component={Homepage} path="/" />
        <Route path="/shop" component={Shop} />
      </div>
    );
  }
}

export default App;
