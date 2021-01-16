import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withStyles } from '@material-ui/core/styles'

import MovieCard from '../movie/movie'

const styles = {
  favorites: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '20px'
  }
}

class FavoriteList extends Component {
  render() {
    const { classes } = this.props

    const { movies } = this.props.favorite

    return(
      <div className={classes.favorites}>
        {movies.length ? movies.map((item) => {
          return <MovieCard 
            key={item.id}
            id={item.id}
            poster={item.poster_path}
            title={item.original_title}
            vote={item.vote_average}
            overview={item.overview}
            date={item.release_date}
            /> 
        }) : <p>No favorite movies</p>}
      </div>
    )
  }
}

const mstp = (state) => {
  return { favorite: state.favorite }
}

export default compose(
  withStyles(styles),
  connect(mstp, null)
)(FavoriteList)