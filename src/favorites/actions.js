import axios from 'axios'
import { apiUrl, apiKey } from '../config/config'

export const GET_FAVORITE_MOVIE_BY_ID_REQUEST = 'GET_FAVORITE_MOVIE_BY_ID_REQUEST'
export const GET_FAVORITE_MOVIE_BY_ID_SUCCESS = 'GET_FAVORITE_MOVIE_BY_ID_SUCCESS'
export const GET_FAVORITE_MOVIE_BY_ID_ERROR = 'GET_FAVORITE_MOVIE_BY_ID_ERROR'

const getFavoriteMovieByIdRequest = () => {
  return {
    type: GET_FAVORITE_MOVIE_BY_ID_REQUEST
  }
}

const getFavoriteMovieByIdSuccess = (data) => {
  return {
    type: GET_FAVORITE_MOVIE_BY_ID_SUCCESS,
    payload: data
  }
}

const getFavoriteMovieByIdError = (error) => {
  return {
    type: GET_FAVORITE_MOVIE_BY_ID_ERROR,
    payload: error
  }
}

export const getFavoriteMovieById = (id) => (dispatch) => {
  const request = getFavoriteMovieByIdRequest()
  dispatch(request)

  const url = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
  axios.get(url)
    .then((response) => {
      const success = getFavoriteMovieByIdSuccess(response.data)
      dispatch(success)
    })
    .catch((data) => {
      const error = getFavoriteMovieByIdError(data)
      dispatch(error)
    })
}