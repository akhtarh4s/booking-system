import React from 'react';
import {Redirect} from 'react-router-dom'

export default class Profile extends React.Component{
    render(){
        return(
        <Redirect to={{pathname: '/login'}}/>
    )
};
}
