import {
  INIT_NUMBER,
  INCREAMENT,
  GET_MOVIE_LIST
} from './action-types'

import {combineReducers} from 'redux'

function num (state = 0, action) {
  switch (action.type) {
    case INIT_NUMBER:
      return action.data
    default:
      return state
  }
}
function list (state = [], action) {
  switch (action.type) {
    case GET_MOVIE_LIST:
      return action.data
  
    default:
      return state
  }
}
export default combineReducers({
  num,
  list
})