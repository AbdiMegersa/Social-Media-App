import React from 'react';
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
            <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/signin" className="nav-link">
                Sign In       
            </Link>
            <Link to="/signup" className="nav-link">
                Sign Up       
            </Link>
        </>
    )
}

export default SignedOutLinks;
