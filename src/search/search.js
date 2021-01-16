import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { getMoviesSearch, setSearchQuery, clearSearchQuery } from './actions'

const styles = {
  search: {
    display: 'flex'
  }, 

  searchField: {
    marginRight: '20px',
    marginTop: '37px'
  },

  searchButton: {
    width: '250px',
    marginTop: '50px'
  }
}

class Search extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const query = this.props.search.query

    if(query) {
      this.props.getMoviesSearch(query)
      this.props.clearSearchQuery()
    }
  }

  handleChange = (event) => {
    const query = event.target.value

    this.props.setSearchQuery(query)
  }
 
  render() {
    const { classes } = this.props

    return (
      <form className={classes.search} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        <TextField className={classes.searchField} id="standard-full-width" 
          fullWidth
          value={this.props.search.query} 
          label="Movie that you want..." 
          variant="standard" 
          onChange={this.handleChange}
          />

        <Button className={classes.searchButton} type='submit' variant="contained" color="primary">Search</Button>
      </form>
    )
  }
}

const mstp = (state) => {
  return { search: state.search }
}

const mdtp = { getMoviesSearch, setSearchQuery, clearSearchQuery }

export default compose(
  withStyles(styles),
  connect(mstp, mdtp)
)(Search)

