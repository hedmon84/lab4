import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Switch,BrowserRouter as Router } from 'react-router-dom'
import HomeComponent from './homeComponent';
import StudenComponents from './studentComponents';
import studentDetailsComponents from './studentDetailsComponent';
import NotFoundComponent from './notFoundComponent';

import * as serviceWorker from './serviceWorker';

const routing =(
    <Router>
        <Switch>

            <Route exact path="/" component={HomeComponent} />
            <Route path="/student" component={StudenComponents} />
            <Route path="/studentDetails/:id" component={studentDetailsComponents} />
            <Route component={NotFoundComponent }/>

        </Switch>


    </Router>


)

ReactDOM.render(routing , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
