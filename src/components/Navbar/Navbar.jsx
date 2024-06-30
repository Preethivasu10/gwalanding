// src/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import brand from '../Assets/brand-logo.png';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SignupCard from '../signup/signup';
import LoginCard from '../login/login';

const Navbar = () => {
    const [isSignInClicked, setIsSignInClicked] = useState(false);
    const [isRegisterClicked, setIsRegisterClicked] = useState(false);
    const [isCorporateDropdownOpen, setCorporateDropdownOpen] = useState(false);
    const [isProvidersDropdownOpen, setProvidersDropdownOpen] = useState(false);

    const corporateDropdownRef = useRef(null);
    const providersDropdownRef = useRef(null);

    const handleSignInClick = () => {
        setIsSignInClicked(true);
        setIsRegisterClicked(false);
    };

    const handleRegisterClick = () => {
        setIsRegisterClicked(true);
        setIsSignInClicked(false);
    };

    const handleCloseSignupCard = () => {
        setIsSignInClicked(false);
    };

    const handleCloseLoginCard = () => {
        setIsRegisterClicked(false);
    };

    const toggleCorporateDropdown = () => {
        setCorporateDropdownOpen(!isCorporateDropdownOpen);
    };

    const toggleProvidersDropdown = () => {
        setProvidersDropdownOpen(!isProvidersDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (corporateDropdownRef.current && !corporateDropdownRef.current.contains(event.target)) {
            setCorporateDropdownOpen(false);
        }
        if (providersDropdownRef.current && !providersDropdownRef.current.contains(event.target)) {
            setProvidersDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-custom-style">
                <a className="navbar-brand ml-md-2" href="#"><img src={brand} alt="Brand Logo" height="36px" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto nav-ul">
                        <li className="nav-item active ml-md-4">
                            <Link className="nav-link nav-link-style" to="#">Find Doctor</Link>
                        </li>
                        <li className="nav-item active ml-md-4">
                            <Link className="nav-link nav-link-style" to="#">About</Link>
                        </li>
                        <li className="nav-item dropdown active ml-md-4" ref={corporateDropdownRef}>
                            <Link className="nav-link nav-link-style dropdown-toggle" to="#" role="button" onClick={toggleCorporateDropdown}>
                                For Corporates <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                            </Link>
                            {isCorporateDropdownOpen && (
                                <div className="dropdown-menu show">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            )}
                        </li>
                        <li className="nav-item dropdown active ml-md-4" ref={providersDropdownRef}>
                            <Link className="nav-link nav-link-style dropdown-toggle" to="#" role="button" onClick={toggleProvidersDropdown}>
                                For Providers <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                            </Link>
                            {isProvidersDropdownOpen && (
                                <div className="dropdown-menu show">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mr-md-2">
                        <li className="nav-item ml-md-4">
                            <button type="button" className="btn nav-signin-button" onClick={handleSignInClick}>Sign In</button>
                        </li>
                        <li className="nav-item ml-md-3">
                            <button type="button" className="btn nav-register-button" onClick={handleRegisterClick}>Register</button>
                        </li>
                    </ul>
                </div>
            </nav>
            {isSignInClicked && (
                <div className="blur-background">
                    <LoginCard onClose={handleCloseSignupCard} onSwitchToSignup={handleRegisterClick} />
                </div>
            )}
            {isRegisterClicked && (
                <div className="blur-background">
                    <SignupCard onCloseSignupCard={handleCloseLoginCard} onSwitchToLogin={handleSignInClick} />
                </div>
            )}
        </header>
    );
};

export default Navbar;