import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import axios from './axios';

import NavBar from './components/NavBar';
// const Link = (props) => <a href={props.children} target="_blank">{props.children}</a>

class App extends Component {
  state = {
    images: []
  };
  
  componentDidMount() {
    axios
      .get("/api/img")
      .then(data => {
        this.setState({ images: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        { this.state.images.length > 0 ? this.state.images[0].title : "" }
      </div>
    );
  }
}

export default App;
