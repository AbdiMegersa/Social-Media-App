import React, { Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NotificationSummary from '../component/NotificationSummary';
import Profile from '../component/Profile';
import CreatePost from '../posts/CreatePost';
import PostList from '../posts/PostList';
import {connect} from 'react-redux'
import {compose} from 'redux'
import {firestoreConnect} from 'react-redux-firebase'

class HomeScreen extends Component {

    render () {

        const {posts} = this.props

        return (
            <Container fluid className="d-flex flex-row">
                <Row className="justify-content-between w-100">
                    <Col xs={3}>
                        <Profile />
                    </Col>
                    <Col xs={6}>
                        <CreatePost />
                        <PostList posts={posts}/>
                    </Col>
                    <Col xs={3}>
                        <NotificationSummary />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        posts: state.post.posts
    }
}


export default connect(mapStateToProps)(HomeScreen)
