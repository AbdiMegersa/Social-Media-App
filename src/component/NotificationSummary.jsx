import React from 'react';
import { Container } from 'react-bootstrap';
import Notifications from './Notifications';

const NotificationSummary = () => {
    return (
        <Container className="border-shadow">
            Recent Notification
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
            <Notifications />
        </Container>
    );
}

export default NotificationSummary;
