import React from "react";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop.component.jsx";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component.jsx";
import Header from "./components/header/Header.component.jsx";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.component.jsx";
import { auth } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user }, () => {
        console.log(this.state.currentUser);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
