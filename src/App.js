import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <Router>
      <Nav/>            
      <Switch>
        <Route exact path="/" component={HomePage} />  
      </Switch>
      <Footer/>
    </Router>
  );
}

