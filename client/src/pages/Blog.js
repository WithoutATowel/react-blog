import React from 'react';
import Post from '../components/Post';

const Blog = (props) => {
    const postData = props.postData;

    return (
        <div className='container'>
            <Post 
                title = { postData.title }
                allAuthors = { postData.allAuthors }
                body = { postData.body }
                comments = { postData.comments }
            />
        </div>
    )
}

export default Blog;

