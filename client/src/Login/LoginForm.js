 import React from 'react';


export default class LoginForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            emailAddress: '',
            password: '',
            rememberMe: true,
            wasSubmitClicked: false
        };
    }

    onEmailAddChange = (event) =>{
        this.setState({emailAddress: event.target.value})
        console.log("Email added");
    }

    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
        console.log("Password changed");
    }

    onRememberMeChecked = (event) => {
        this.setState({rememberMe: event.target.checked});
        console.log("remember me checked");
    }

    onSubmitClicked = (event) => {
        event.preventDefault();
        this.setState({
            wasSubmitClicked: true
        });
    }


    render () {
        return <Form isRememberMeChecked={this.state.rememberMe}
                    emailAddress={this.state.emailAddress}
                    password={this.state.password}
                    onEmailAddChange={this.onEmailAddChange}
                    onPasswordChange={this.onPasswordChange}
                    onRememberMeChecked={this.onRememberMeChecked}
                    onSubmitClicked={this.onSubmitClicked}
                    wasSubmitClicked={this.state.wasSubmitClicked} />;
    }
}

const Form = (props) => {
    debugger;
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="container">
                    <div className="col-4">
                        <form className={props.wasSubmitClicked ? ('was-validated') : ('needs-validation')} noValidate>
                            <div className="form-group">
                                <label for="inputEmail1">Email address</label>
                                <input value={props.emailAddress} onChange={props.onEmailAddChange} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                <div class="invalid-feedback">
                                  Please provide a valid e-mail address.
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputPassword1">Password</label>
                                <input value={props.password} onChange={props.onPasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                                <div class="invalid-feedback">
                                  Please provide your password.
                                </div>
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input checked={props.isRememberMeChecked} onChange={props.onRememberMeChecked} type="checkbox" className="form-check-input"/>
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={props.onSubmitClicked}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
