/**
* Blog Reducer
*/
import initialState from '../../store/initialState'
import * as types from './types'
export default function taskReducer(state = initialState.task, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return {
        ...state,
        posts: action.posts
      } 
    default:
      return state
  }
}