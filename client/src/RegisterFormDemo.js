import React from 'react';

export default class RegisterFormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            wasSubmitClicked: false
        };
    }

    onFirstNameChange = (event) =>{
        this.setState({firstName: event.target.value})
        console.log("First Name added")
    }

    onLastNameChange = (event) =>{
        this.setState({lastName: event.target.value})
        console.log("Last Name added");
    }

    onEmailAddChange = (event) => {
        this.setState({emailAddress: event.target.value})
        console.log("Email added");
    }

    onConfirmEmailChange = (event) => {
        this.setState({confirmEmail: event.target.value})
        console.log("Confirm Email added");
    }

    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
        console.log("Password added");
    }

    onConfirmPasswordChange=(event)=>{
        this.setState({confirmPassword: event.target.value})
        console.log("Confirm Password added");
    }

    confirmEmailFunc=(event)=>{
        event.preventDefault();
        this.setState({wasSubmitClicked:true})
        console.log("Submit clicked");
    }

    wasSubmitClicked=(event)=>{
        event.preventDefault();
        this.setState({wasSubmitClicked:true})
        console.log("Submit clicked");
    }

    render () {
        return <RegistrationForm firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                emailAddress={this.state.emailAddress}
                                confirmEmail={this.state.confirmEmail}
                                password={this.state.password}
                                confirmPassword={this.state.confirmPassword}
                                onFirstNameChange={this.onFirstNameChange}
                                onLastNameChange={this.onLastNameChange}
                                onEmailAddChange={this.onEmailAddChange}
                                onConfirmEmailChange={this.onConfirmEmailChange}
                                onPasswordChange={this.onPasswordChange}
                                onConfirmPasswordChange={this.onConfirmPasswordChange}
                                confirmEmailFunc={this.confirmEmailFunc.bind(this)}
                                wasSubmitClicked={this.state.wasSubmitClicked}
        />;
    }
}

const RegistrationForm = (props) => {
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="container">
                    <div className="col-4">
                        <form className={props.wasSubmitClicked ? ('was-validated') : ('needs-validation')} noValidate>
                            <div className="form-group">
                                <label for="inputFirstName">First name</label>
                                <input value={props.firstName} onChange={props.onFirstNameChange} type="inputFirstName" className="form-control" id="inputFirstName" aria-describedby="firstName" placeholder="Enter first name"/>
                            </div>
                            <div className="form-group">
                                <label for="inputLastName">Last name</label>
                                <input value={props.lastName} onChange={props.onLastNameChange} type="inputLastName" className="form-control" id="inputLastName" aria-describedby="emailHelp" placeholder="Enter last name"/>
                            </div>
                            <div className="form-group">
                                <label for="InputEmail1">Email address</label>
                                <input value={props.emailAddress} onChange={props.onEmailAddChange} type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid e-mail address
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="ConfirmEmail1">Re-enter Email address</label>
                                <input value={props.confirmEmail} onChange={props.onConfirmEmailChange} onBlur={props.confirmEmailFunc}  type="email" className="form-control" id="InputConfirmEmail" aria-describedby="emailHelp" placeholder="Confirm email address" required/>
                                <div class="invalid-feedback">
                                    Please provide a valid e-mail address
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="InputPassword1">Password</label>
                                <input value={props.password} onChange={props.onPasswordChange} type="password" className="form-control" id="InputPassword" placeholder="Password" required />
                                <div class="invalid-feedback">
                                    Please provide a valid password
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="reenterInputPassword">Re-enter Password</label>
                                <input value={props.confirmPassword} onChange={props.onConfirmPasswordChange} type="password" className="form-control" id="InputConfirmPassword" placeholder="Password" required />
                                <div class="invalid-feedback">
                                    Please provide a valid password
                                </div>
                            </div>
                            <button onClick={props.confirmEmailFunc} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
