import axios from 'axios'

export const GET_POPULAR_MOVIES_REQUEST = 'GET_POPULAR_MOVIES_REQUEST'
export const GET_POPULAR_MOVIES_SUCCESS = 'GET_POPULAR_MOVIES_SUCCESS'
export const GET_POPULAR_MOVIES_ERROR = 'GET_POPULAR_MOVIES_ERROR'

const getPopularMoviesRequest = () => {
  return {
    type: GET_POPULAR_MOVIES_REQUEST
  }
}

const getPopularMoviesSuccess = (data) => {
  return {
    type: GET_POPULAR_MOVIES_SUCCESS,
    payload: data
  }
}

const getPopularMoviesError = (error) => {
  return {
    type: GET_POPULAR_MOVIES_ERROR,
    payload: error
  }
}

export const getPopularMovies = (page = 1) => (dispatch) => {
  const request = getPopularMoviesRequest()
  dispatch(request)

  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=4bfb1b08bd8a3a7bc205df0e6abf6d11&page=' + page 
  axios.get(url)
    .then((response) => {
      const success = getPopularMoviesSuccess(response.data)
      dispatch(success)
    })
    .catch((data) => {
      const error = getPopularMoviesError(data)
      dispatch(error)
    })
}

