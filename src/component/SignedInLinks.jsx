import React from 'react';
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <>
            <Link to="/" className="nav-link">
                home
            </Link>
            <Link to="/message" className="nav-link">
                message
            </Link>
            <Link to="/notification" className="nav-link">
                Notification
            </Link>
        </>
    );
}

export default SignedInLinks;
