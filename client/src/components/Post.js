import React, { Component } from 'react';
import Author from './Author';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super()
    this.state = {
      body: props.body,
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   // make axios API call to server route
  //   // i.e. /api/posts to retrieve posts
  //   axios.get('/api/posts')
  //     .then((response) => {
  //       this.setState({
  //         body: response.body
  //       })
  //     })
  // }


  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  changeBody(e) {
    const newVal = document.getElementById('newBody').value;
    this.setState({
      body: newVal
    })
  }

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
          <h1 className="title">{title}</h1>
          <div>{authors}</div>
          <div>{this.state.body}</div> 
          <button onClick={(e) => this.changeBody(e) } >Edit Body</button>
          <input type='text' id='newBody' value={this.state.input} onChange={this.handleChange} />
          <h3>Comments:</h3>
          {allComments}
      </div>
    );
  }
}

export default Post;
