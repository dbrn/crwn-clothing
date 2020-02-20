import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/Homepage.component.jsx";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact component={Homepage} path="/" />
        <Route path="/hats" component={HatsPage} />
      </div>
    );
  }
}

export default App;
