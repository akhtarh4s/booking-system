import React from 'react';
import './Header.css';
import {
  Link
} from 'react-router-dom'

export default() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Booking.io</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/login"><a className="nav-link" href="#">Log in <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register"><a className="nav-link" href="#">Register</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
