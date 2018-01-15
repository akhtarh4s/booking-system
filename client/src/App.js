import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LoginForm from './Login/LoginForm';
import RegisterFormDemo from './Register/RegisterForm';
import Profile from './Profile/Profile';
import NoMatch from './NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

export default() => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={LoginForm}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterFormDemo}/>
                    <Route path="/profile" component={Profile}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};
