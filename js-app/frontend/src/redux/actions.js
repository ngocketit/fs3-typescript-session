import { searchMovie } from '../apis/starWars'

export const SEARCH_START = 'FETCH_START'
export const SEARCH_SUCCESS = 'FETCH_SUCCESS'
export const SEARCH_FAIL = 'FETCH_FAIL'
export const REMOVE_SEARCH = 'REMOVE_SEARCH'

export function searchCharacter(name) {
  return dispatch => {
    dispatch(searchStart())
    searchMovie(name).then(data => {
      dispatch(searchSuccess({
        [name]: data,
      }))
    }).catch(err => {
      dispatch(searchFail())
    })
  }
}

function searchStart() {
  return {
    type: SEARCH_START,
  }
}

function searchFail() {
  return {
    type: SEARCH_FAIL,
  }
}

function searchSuccess(payload) {
  return {
    type: SEARCH_SUCCESS,
    payload,
  }
}

export function removeSearch(character) {
  return {
    type: REMOVE_SEARCH,
    payload: {
      character,
    }
  }
}
