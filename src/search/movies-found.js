import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  searchResult: {
    display: 'inline-block',
    width: '150px',
    marginRight: '763px'
  }
}))

function MoviesFound(props) {
  const classes = useStyles();

  return (
  <span className={classes.searchResult}>{props.movie.loaded ? props.movie.movies.total_results : 0} movies found</span>
  )
}

const mstp = (state) => { 
  return { movie: state.movie }
}

export default connect(mstp, null)(MoviesFound)


