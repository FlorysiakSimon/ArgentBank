import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from './pages/LoginPage/LoginPage'
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import UserPage from './pages/UserPage/UserPage';

export default function App() {
  return (
    <Router>
      <Nav/>            
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/user' component={UserPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

