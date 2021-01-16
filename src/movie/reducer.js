import { 
  GET_POPULAR_MOVIES_REQUEST, 
  GET_POPULAR_MOVIES_SUCCESS, 
  GET_POPULAR_MOVIES_ERROR 
} from './actions'

import {
  GET_MOVIES_SEARCH_REQUEST,
  GET_MOVIES_SEARCH_SUCCESS,
  GET_MOVIES_SEARCH_ERROR
} from '../search/actions'

import {
  SORT_BY_RELEASE_DATE,
  SORT_BY_RATING
} from '../sorting/actions'

const initialState = {
  loading: false,
  loaded: false,
  search: false,
  movies: [],
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POPULAR_MOVIES_REQUEST: 
      return { ...state, loading: true, loaded: false, search: false }
    case GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, loading: false, loaded: true, movies: action.payload } 
    case GET_POPULAR_MOVIES_ERROR:
      return { ...state, loading: false, loaded: false, error: action.payload }

    case GET_MOVIES_SEARCH_REQUEST: 
      return { ...state, loading: true, loaded: false, search: true }
    case GET_MOVIES_SEARCH_SUCCESS:
      return { ...state, loading: false, loaded: true, movies: action.payload } 
    case GET_MOVIES_SEARCH_ERROR:
      return { ...state, loading: false, loaded: false, error: action.payload }

    case SORT_BY_RELEASE_DATE:
      return {
        ...state,
        movies: {
          ...state.movies,
          results: [...state.movies.results].sort((a, b) =>  {
            const dateA = new Date(a.release_date).getTime()
            const dateB = new Date(b.release_date).getTime()
            
            return dateB - dateA
          })
        }
      }

    case SORT_BY_RATING:
      return {
        ...state,
        movies: {
          ...state.movies,
          results: [...state.movies.results].sort((a, b) => b.vote_average - a.vote_average)
        }
      }
      
    default:
      return state              
  }
}

