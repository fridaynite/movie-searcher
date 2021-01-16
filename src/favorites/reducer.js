import {
  GET_FAVORITE_MOVIE_BY_ID_REQUEST,
  GET_FAVORITE_MOVIE_BY_ID_SUCCESS,
  GET_FAVORITE_MOVIE_BY_ID_ERROR
} from './actions'

const initialState = {
  loading: false,
  loaded: false,
  error: '',
  movies: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_FAVORITE_MOVIE_BY_ID_REQUEST: 
      return {...state, loading: true}

    case GET_FAVORITE_MOVIE_BY_ID_SUCCESS:
      return {...state, loading: false, loaded: true, movies: [...state.movies, action.payload]}

    case GET_FAVORITE_MOVIE_BY_ID_ERROR:
      return {...state, loading: false, loaded: true, error: action.payload}
    
    default:
      return state
  }
}
