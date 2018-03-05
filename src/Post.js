import React, { Component } from 'react';
import logo from './logo.svg';
import Author from './Author';
import Comment from './Comment';
import './App.css';

class Post extends Component {
  render() {
 
    const { title, allAuthors, body, comments } = this.props

    let authors = allAuthors.map(function(author, index) {
      return <Author key={index} author={author} />
    })

    let allComments = comments.map(function(comment, index) {
      return <Comment key={index} text={comment} />
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1 className="title">{title}</h1>
          <p>{authors}</p>
          <p>{body}</p> 
          <h3>Comments:</h3>
          {allComments}
        </div>
      </div>
    );
  }
}

export default Post;
