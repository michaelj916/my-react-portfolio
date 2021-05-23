import React, { Component } from 'react';
import { useIntersection } from "react-use";
import { Switch, Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import gsap from "gsap";


import './App.css';
import Work from './components/Work';
import Contact from './components/Contact';
import About from './components/About';


class App extends React.Component {
  render() {
      return <>
  
  
        <svg className="artwork" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="35" className="hover-grey pink small">&#177;</text>
            <text x="30" y="35" className="hover-pink first">Michael</text>
            <text x="25" y="55" className="hover-pink small">&#215;</text>
            <text x="45" y="65" className="hover-grey last">Jarrah</text>
        </svg>                             
  
        
        <Router>
          <div className="nav">
                <NavLink to="/work" activeClassName="active">work</NavLink>
                <NavLink to="/about" activeClassName="active">about</NavLink>
                <NavLink to="/contact" activeClassName="active">contact</NavLink>
          </div>
                <Switch>
                    <Route path="/work" component={Work}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
        </Router>

        
  
        <div className="socials">
            <a target="blank" href="https://github.com/michaelj916"><svg className="git" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
            {/* <a target="blank" href="theme();"><svg className="git" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.5112 30.2473C55.4209 31.2558 55.4209 32.7442 54.5112 33.7527C51.1225 37.5096 42.3222 46 32 46C21.6778 46 12.8775 37.5096 9.48875 33.7527C8.57913 32.7442 8.57913 31.2558 9.48875 30.2473C12.8775 26.4904 21.6778 18 32 18C42.3222 18 51.1225 26.4904 54.5112 30.2473Z" fill="#0F277F"/><circle cx="32" cy="32" r="9" fill="#FDAFA4"/><path d="M38.5 29C39.8807 29 41 27.8807 41 26.5C41 25.1193 39.8807 24 38.5 24C37.1193 24 36 25.1193 36 26.5C36 27.8807 37.1193 29 38.5 29Z" fill="white"/><path d="M35.5 31C36.3284 31 37 30.3284 37 29.5C37 28.6716 36.3284 28 35.5 28C34.6716 28 34 28.6716 34 29.5C34 30.3284 34.6716 31 35.5 31Z" fill="white"/><path d="M10 19V14H15" stroke="#0F277F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 45V50H15" stroke="#0F277F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 19V14H49" stroke="#0F277F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 45V50H49" stroke="#0F277F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></a> */}
        </div>
        
      </>
    
  }
  
}

export default App;
