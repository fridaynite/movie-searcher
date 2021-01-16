import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import Pagination from '@material-ui/lab/Pagination'

import { getPopularMovies } from './actions'
import { getMoviesSearch } from '../search/actions'

const styles = {
  pagination: {
    '& > *': {
      marginTop: '20px'
    }
  }
}

class MoviePagination extends  Component {
  handleChangePage = (event, page) => {
    const { search, movie } = this.props
    movie.search ? this.props.getMoviesSearch(search.previousQuery, page) : this.props.getPopularMovies(page)
  }
  
  render() {
    const { classes, movie } = this.props

    return (
      <Pagination onChange={this.handleChangePage} className={classes.pagination} count={movie.movies.total_pages} />
    )
  }
}

const mstp = (state) => {
  return {
    movie: state.movie,
    search: state.search
  }
}

const mdtp = { getPopularMovies, getMoviesSearch }

export default compose(
  withStyles(styles),
  connect(mstp, mdtp)
)(MoviePagination)