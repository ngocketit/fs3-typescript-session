import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {searchCharacter } from '../redux/actions'

export default function useSearchCharacter(character) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.character.data[character])

  useEffect(() => {
    if (data) {
      return
    }
    dispatch(searchCharacter(character))
  }, [character, dispatch, data])

  return data
}
