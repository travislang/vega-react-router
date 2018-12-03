import React, { Component } from 'react';
import './App.css';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
    render() {
        return (
            <Router>
                {/* <div className="App">
                    <Home />
                    <Plants />
                    <Animals />
                </div> */}
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/plants'>Plants</Link>
                        </li>
                        <li>
                            <Link to='/animals'>Animals</Link>
                        </li>
                    </ul>
                    <Route path='/' exact component={Home} />
                    <Route path='/plants' component={Plants} />
                    <Route path='/animals' component={Animals} />
                </div>
            </Router>
        );
    }
}

export default App;
