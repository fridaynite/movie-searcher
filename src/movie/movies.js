import React, { Component } from 'react'
import { connect } from 'react-redux'

import Movie from './movie.js'

import { getPopularMovies } from './actions'

class Movies extends Component {
  componentDidMount() {
    this.props.getPopularMovies()
  }

  render() {
    const { loaded, movies } = this.props.movie 

    return loaded && movies.results.map((item) => {
      return <Movie
        key={item.id}
        id={item.id}
        poster={item.poster_path} 
        title={item.original_title}
        vote={item.vote_average}
        overview={item.overview}
        date={item.release_date}
        rating={item.vote_average}
      />
    }) 
  }
}

const mstp = (state) => { 
  return { movie: state.movie }
}

const mdtp = { getPopularMovies }

export const MoviesList = connect(mstp, mdtp)(Movies)
