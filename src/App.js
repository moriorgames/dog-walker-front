import React, {Component} from "react";
import './App.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomeHandler from "./handlers/HomeHandler";
import ClickMeHandler from "./handlers/ClickMeHandler";

class BasicExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="http://localhost:8080/">Home</Link>
                        </li>
                        <li>
                            <Link to="/click_me">ClickMe</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={HomeHandler}/>
                    <Route path="/click_me" component={ClickMeHandler}/>
                </div>
            </Router>
        )
    }
}

export default BasicExample
