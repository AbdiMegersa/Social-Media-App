import React from 'react';
import { Container, Row } from 'react-bootstrap';
import johndoe from '../assets/johndoe.png'

const Profile = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center profile border-shadow">
            <Row>
                <img src={johndoe} className="mt-3 profile-img"/>
            </Row>
            <Row>
                <h4>John Doe</h4>
            </Row>
            <Row>
                <p>Hello every one this is me hohn doe i like everything and hate everytin at the same time </p>
            </Row>
        </Container>
    );
}

export default Profile;
