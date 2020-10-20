import React from 'react';
import Header from './CommonComponent/Header/Header';
import Footer from "./CommonComponent/Footer/Footer";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Blog from "./Pages/BLOG/Blog";
import Contact from "./Pages/CONTACT/Contact";
import Login from './Pages/Login/Login';
function App() {
    return (
      <div className="App">
        <Header />
          
          <Login/>
     
  
  
  
        <Router>
  
          <Switch>
  
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/PORTFOLIO" component={Home} />
            <Route exact path="/PAGES" component={Home}></Route>
            <Route exact path="/ELEMENTS" component={Home}></Route>
            <Route exact path="SHOPS" component={Home}></Route>
            <Route exact path="/BLOGS" component={Blog}></Route>
            <Route exact path="/CONTACT" component={Contact}></Route>
            <Route exact path="/Login" component={Login}></Route>
  
   */}
          </Switch>
        </Router>
  
        <Footer />
  
       
  
      </div>
    );
  }
  
  
  export default App;
  