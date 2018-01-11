import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import LoginForm from './LoginForm.js';
import RegisterFormDemo from './RegisterFormDemo.js';

export default() => {
    return (
        <div>
            <Header/>
            <LoginForm/>
            <Footer/>
            <RegisterFormDemo/>
        </div>
    );
};
