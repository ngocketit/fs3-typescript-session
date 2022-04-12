import { Dispatch } from 'redux'

import { searchMovie } from '../apis/starWars'
import {SearchResult} from '../types'

export const SEARCH_START = 'FETCH_START'
export const SEARCH_SUCCESS = 'FETCH_SUCCESS'
export const SEARCH_FAIL = 'FETCH_FAIL'
export const REMOVE_SEARCH = 'REMOVE_SEARCH'

export function searchCharacter(name: string) {
  return (dispatch: Dispatch) => {
    dispatch(searchStart())
    searchMovie(name).then((data: SearchResult) => {
      dispatch(searchSuccess({
        [name]: data,
      }))
    }).catch((_err: any) => {
      dispatch(searchFail())
    })
  }
}

function searchStart() {
  return {
    type: SEARCH_START,
    payload: {},
  }
}

function searchFail() {
  return {
    type: SEARCH_FAIL,
    payload: {},
  }
}

function searchSuccess(payload: SearchSuccessPayload) {
  return {
    type: SEARCH_SUCCESS,
    payload,
  }
}

export function removeSearch(character: string) {
  return {
    type: REMOVE_SEARCH,
    payload: {
      character,
    }
  }
}

export type SearchSuccessPayload = {
  [key: string]: SearchResult
}
export type RemoveSearchPayload = {
  character: string
}

export type Actions =
  ReturnType<typeof searchStart> |
  ReturnType<typeof searchFail> |
  ReturnType<typeof searchSuccess> |
  ReturnType<typeof removeSearch>
