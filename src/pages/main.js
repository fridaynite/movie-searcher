import React from 'react' 

import { makeStyles } from '@material-ui/core/styles'

import Search from '../search/search.js'
import { MoviesList } from '../movie/movies.js'
import MoviesFound from '../search/movies-found.js'
import Sorting from '../sorting/sorting.js'
import MoviePagination from '../movie/pagination.js'

const useStyles = makeStyles(() => ({
  sortWrap: {    
    marginTop: '50px',
    marginBottom: '50px',
  },

  movies: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  pagination: {
    '& > *': {
      marginTop: '20px'
    },
  }
}))

function Main() {
  const classes = useStyles()

  return(
    <React.Fragment>
      <Search />
            
      <div className={classes.sortWrap}>
        <MoviesFound />
        <Sorting />
      </div>
      
      <div className={classes.movies}>
        <MoviesList />
      </div>

      <MoviePagination />
    </React.Fragment>
  )
}

export default Main