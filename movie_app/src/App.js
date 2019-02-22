import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {

  state = {
    greeting: 'Hello!',
    // :(콜론) 키: 값 쌍을 나타낸다. 아래는 movies 라는 키 값에 영화정보의 값 배열이 들어있네.
    
  }

  componentDidMount(){
    setTimeout(() =>{
      this.setState({
        movies: [
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
          },
          {
            title: "transporter",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51NnvDGf4hL._SX342_.jpg"
          }
        ]
      }) 
    },5000)
  }

  _renderMovies = () =>{
    const movies = this.state.movies.map((movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...' }
      </div>
    );
  }
}

export default App;
