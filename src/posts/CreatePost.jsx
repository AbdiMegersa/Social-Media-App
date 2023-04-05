import React from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import johndoe from '../assets/johndoe.png'
import {createPost} from '../store/actions/postActions'
import { connect} from 'react-redux'

class CreatePost extends React.Component {

    state = {
        postText: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state)
    }

    render() {

        return (
            <Container className='create-post border-shadow p-3 mb-4'>
                <form onSubmit={this.handleSubmit}>
                    <img src={johndoe} className="poster-img "/>
                    <input 
                        type="text"
                        name="postText"
                        className='post-input'
                        onChange={this.handleChange}
                    />
                    <button className='post-btn'>
                        POST
                    </button>
                </form>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null, mapDispatchToProps)(CreatePost);
