import { combineReducers } from 'redux'

import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL, REMOVE_SEARCH } from './actions'

function characterReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH_START:
      return {...state, loading: true}

    case SEARCH_SUCCESS:
      return {...state, data: {...state.data, ...action.payload}, loading: false }

    case SEARCH_FAIL:
      return {...state, loading: false}

    case REMOVE_SEARCH: {
      const { character } = action.payload
      delete state.data[character]
      return {...state}
    }

    default:
      return state
  }
}

const createRootReducer = () => combineReducers({
  character: characterReducer,
})

export default createRootReducer
