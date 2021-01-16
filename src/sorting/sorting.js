import React from 'react'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import { sortByReleaseDate, sortByRating } from './actions'

const useStyles = makeStyles(() => ({
  sortButton: {
    marginLeft: '20px'    
  }
}))

function Sorting(props) {
  const classes = useStyles()

  return(
    <React.Fragment>
      <span>Sort by</span>
      <Button onClick={props.sortByReleaseDate} className={classes.sortButton} variant="contained" color="primary">Release date</Button>
      <Button onClick={props.sortByRating} className={classes.sortButton} variant="contained" color="primary">Rating</Button>
    </React.Fragment>
  )
}

const mdtp = { sortByReleaseDate, sortByRating }

export default connect(null, mdtp)(Sorting)