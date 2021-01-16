import {
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY
} from './actions'

const initialState = {
  query: '',
  previousQuery: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_QUERY: 
      return { query: action.payload, previousQuery: action.payload }
    
    case CLEAR_SEARCH_QUERY: 
      return { ...state, query: '' }   
      
    default:
      return state
  }
}