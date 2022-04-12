import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {searchCharacter } from '../redux/actions'
import { AppState } from '../redux/store'

export default function useSearchCharacter(character: string) {
  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.character.data[character])

  useEffect(() => {
    if (data) {
      return
    }
    dispatch(searchCharacter(character))
  }, [character, dispatch, data])

  return data
}
