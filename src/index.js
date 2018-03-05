import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

var postData = {
    title: 'Dinosaurs are awesome',
    allAuthors: [
        'Stealthy Stegosaurus',
        'Tiny T-rex',
        'Igunadon Ivory'
    ],
    body: 'Check out this body property!',
    comments: [
        'First!',
        'Great post',
        'Hire this author now!'
    ]
}

ReactDOM.render(
    <Post 
        title = { postData.title }
        allAuthors = { postData.allAuthors }
        body = { postData.body }
        comments = { postData.comments }
    />, 
    document.getElementById('root')
);
registerServiceWorker();
