import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

/** 按需加载 */
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Login from 'bundle-loader?lazy&name=login!pages/Login/Login';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/login">登陆</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userInfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/login" component={createComponent(Login)}/>
                <Route path="/counter" component={createComponent(Counter)}/>
                <Route path="/userInfo" component={createComponent(UserInfo)}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;