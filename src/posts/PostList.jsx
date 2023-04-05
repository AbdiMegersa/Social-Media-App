import React from 'react';
import PostSummary from './PostSummary'

const PostList = ({posts}) => {
    return (
        <>
        {posts ? posts.map(post => <PostSummary key={post.id} post={post}/>) : 'No post found'}
        </>
    );
}

export default PostList;
