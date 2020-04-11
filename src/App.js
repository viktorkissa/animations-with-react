import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function App() {
  return (
    <div>
        <BrowserRouter>
            <header>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                </ul>
            </header>
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={450}
                        classNames="fade">
                        <Switch location={location}>
                            <Route path='/' exact render={() => <Home />} />
                            <Route path='/about' render={() => <About />} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </BrowserRouter>
    </div>
  );
}

export default App;
