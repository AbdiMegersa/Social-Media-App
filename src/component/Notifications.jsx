import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import johndoe from '../assets/johndoe.png'

const Notifications = () => {
    return (
        <Container className="m-2">
            <Row>
                <Col xs={3}>
                    <img className="mt-2 poster-img" src={johndoe} />
                </Col>
                <Col>
                    <Row>
                        <strong>John Doe shared a post</strong>  
                    </Row>
                    <Row>
                        <p>5 min ago</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Notifications;
