import { useDispatch } from 'react-redux'

import SearchForm from './Search'
import {searchCharacter } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()

  const handleSearch = (params: {character: string}) => {
    dispatch(searchCharacter(params.character))
  }

  return (
    <SearchForm onSubmit={handleSearch} />
  )
}
