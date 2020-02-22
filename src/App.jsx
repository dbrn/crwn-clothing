import React from "react";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop.component.jsx";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component.jsx";
import Header from "./components/header/Header.component.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    );
  }
}

export default App;
