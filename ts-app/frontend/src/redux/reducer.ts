import { combineReducers } from 'redux'

import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL, REMOVE_SEARCH, Actions, SearchSuccessPayload, RemoveSearchPayload } from './actions'
import { Movie, SearchResult } from '../types'

export type CharacterState = {
  data: {
    [key: string]: SearchResult
  }
  loading: boolean
}

const initState = {
  data: {},
  loading: false,
}

function characterReducer(state: CharacterState = initState, action: Actions): CharacterState {
  switch (action.type) {
    case SEARCH_START:
      return {...state, loading: true}

    case SEARCH_SUCCESS:
      return {...state, data: {...state.data, ...(action.payload as SearchSuccessPayload)}, loading: false }

    case SEARCH_FAIL:
      return {...state, loading: false}

    case REMOVE_SEARCH: {
      const { character } = action.payload as RemoveSearchPayload
      delete state.data[character]
      return {...state}
    }

    default:
      return state
  }
}

const createRootReducer = () => combineReducers<{character: CharacterState}>({
  character: characterReducer,
})

export default createRootReducer
