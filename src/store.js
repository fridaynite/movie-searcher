import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { reducer as movie } from './movie/reducer'
import { reducer as search } from './search/reducer'
import { reducer as favorite } from './favorites/reducer'


const reducer = combineReducers({
  movie,
  search,
  favorite
})

export const store = createStore(reducer, applyMiddleware(thunk))      