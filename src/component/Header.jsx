import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" className="p-2">
                    <LinkContainer to="/">
                        <Navbar.Brand>SM-app</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <SignedOutLinks />
                        <SignedInLinks />
                    </Nav>
            </Navbar>
        </header>
    );
}

export default Header;
