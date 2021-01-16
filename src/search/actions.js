import axios from 'axios'

import { apiKey, apiUrl } from '../config/config'

export const GET_MOVIES_SEARCH_REQUEST = 'GET_MOVIES_SEARCH_REQUEST'
export const GET_MOVIES_SEARCH_SUCCESS = 'GET_MOVIES_SEARCH_SUCCESS'
export const GET_MOVIES_SEARCH_ERROR = 'GET_MOVIES_SEARCH_ERROR'

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY'

const getMoviesSearchRequest = () => {
  return {
    type: GET_MOVIES_SEARCH_REQUEST
  }
}

const getMoviesSearchSuccess = (data) => {
  return {
    type: GET_MOVIES_SEARCH_SUCCESS,
    payload: data
  }
}

const getMoviesSearchError = (error) => {
  return {
    type: GET_MOVIES_SEARCH_ERROR,
    payload: error
  }
}

export const getMoviesSearch = (query, page = 1) => (dispatch) => {
  const request = getMoviesSearchRequest()
  dispatch(request)

  const url = `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
  axios.get(url)
    .then((response) => {
      const success = getMoviesSearchSuccess(response.data)
      dispatch(success)
    })
    .catch((data) => {
      const error = getMoviesSearchError(data)
      dispatch(error)
    })
}

export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query
  }
}

export const clearSearchQuery = () => {
  return {
    type: CLEAR_SEARCH_QUERY
  }
}


