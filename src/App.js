import React, { Component } from "react";
import "./App.css";
import {
      BrowserRouter as Router,
      Route,
      Switch,
      Redirect
} from "react-router-dom";
import Login from "./components/login.js"
class App extends Component {
      render() {
            return (
                  <Router>
                        <div>
                              <Switch>
                                    <Route
                                          exact
                                          path="/"
                                          exact
                                          component={Login}
                                    />
                                    <Route path="/home" component={Home} />
                                    <Route path="/show" component={Show} />
                                    <Redirect to="/" />
                              </Switch>
                        </div>
                  </Router>
            );
      }
}


const Home = () => {
      return <div>Home</div>;
};
const Show = () => {
      return <div>Show</div>;
};
export default App;
