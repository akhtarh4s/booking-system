import React from 'react';

export default() => {
    return (
        <div className="container">
            <div className="jumbotron">
                <div className="container">
                    <div className="col-4">
                        <form>
                            <div className="form-group">
                                <label for="inputFirstName">First name</label>
                                <input type="inputFirstName" className="form-control" id="inputFirstName" aria-describedby="firstName" placeholder="Enter first name"/>
                            </div>
                            <div className="form-group">
                                <label for="inputLastName">Last name</label>
                                <input type="inputLastName" className="form-control" id="inputLastName" aria-describedby="emailHelp" placeholder="Enter last name"/>
                            </div>
                            <div className="form-group">
                                <label for="InputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label for="ConfirmEmail1">Re-enter Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label for="InputPassword1">Password</label>
                                <input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="reenterInputPassword">Re-enter Password</label>
                                <input type="password" className="form-control" id="reenterInputPassword1" placeholder="Password"/>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
