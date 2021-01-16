import React, { Component } from 'react'
import { connect } from 'react-redux'

import FavoriteList from '../favorites/favorite-list'

import { getFavoriteMovieById } from '../favorites/actions'

class Favorites extends Component {
  componentDidMount() {    
    const favorite = localStorage.getItem('favoriteIds')
    const favoriteArr = favorite ? JSON.parse(favorite) : []

    favoriteArr.forEach((el) => this.props.getFavoriteMovieById(el))
  }

  render() {
    return(  
      <FavoriteList />
    )
  }
}

const mdtp = { getFavoriteMovieById }

export default connect(null, mdtp)(Favorites)