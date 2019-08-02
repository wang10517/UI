import React, { Component } from "react";
import "./App.css";
import Routing from "./routes/routing";
import { BrowserRouter as Router } from "react-router-dom";
import Auth from "./pages/auth/auth";
import Cookies from 'js-cookie';
import ErrorBoundary from '../src/errors/ErrorBoundary';


class App extends Component {
  state = {
    loggedIn : false
  }

  render() {
    let cookie = Cookies.get('loggedIn'); 
    
    // If no cookie present, route to login page with refresh function to be called once the login is done
    if (cookie !== "true") {
      return <Auth refresh={() => this.setState({loggedIn : true})} />;
    } 

    return (
      <ErrorBoundary>
        <Router>
          <Routing />
        </Router>
      </ErrorBoundary>
    )
  }
}

export default App;
