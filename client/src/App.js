import React, { Component } from 'react';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Movie from './pages/Movie';
import Food from './pages/Food';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

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

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/movie">Favorite Movie</Link>
                        <Link to="/food">Favorite Food</Link>
                        <Link to="/about">About Me</Link>
                    </nav>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={ () => <Blog postData={postData} /> } />
                    <Route path="/movie" component={Movie} />
                    <Route path="/food" component={Food} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App;

//<Route path="/Blog" component={  } />