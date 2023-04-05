import React from 'react';
import {Container} from 'react-bootstrap'
import johndoe from '../assets/johndoe.png'

const Post = ({post}) => {
    return (
        <Container className="d-flex flex-column post border-shadow my-4">
            <div className="post-user d-flex flex-row ">
                <div className="post-user-img mx-2">
                    <img src={johndoe} />
                </div>
                <div className="post-user-desc d-flex flex-column">
                    <strong>{post.author ? post.author : 'Default'}</strong>
                    <i>3 min ago</i>
                </div>
            </div>
            <div className='post-text'>
                <p>
                    {post.text ? post.text : 'Defaultt test lorem epsum'}
                </p>
            </div>
            <div>
                like
            </div>
        </Container>
    );
}

export default Post;
