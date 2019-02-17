import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg"
  },
  {
    title: "Oldboy",
    poster:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXepaTQOs33GBlFS1Lu0Y6ifwsINileFw1TxhC62NId7VsRmxg"
  },
  {
    title: "Star Wars",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  }
]

class App extends Component {
   render() {
    return (
      <div className="App">
        {movies.map(movie => {
          <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
