import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [

  "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXepaTQOs33GBlFS1Lu0Y6ifwsINileFw1TxhC62NId7VsRmxg",
  "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
]

const movies = [
  {
    title: "Matrix",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title: "Matrix",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title: "Matrix",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },{
    title: "Matrix",
    poster:   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
]

class App extends Component {
   render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
