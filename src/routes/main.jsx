import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from 'history';
import App from '../App';
import {Draw} from '../screens/drawDogScreen'
import { SideBar } from '../components/sidebar';


const history = createBrowserHistory();

class Routes extends React.Component {
    
    render() {
        return (
            <Router history={history}>
                <SideBar/>
                <Switch>
                    <Route path="/home" component={App}/>
                    <Route path="/draw" component={Draw}/>
                </Switch>
            </Router>
        )
    }
}

export {Routes};