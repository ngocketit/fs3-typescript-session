import { useDispatch } from 'react-redux'

import SearchForm from './Search'
import {searchCharacter } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()

  const handleSearch = ({character}) => {
    dispatch(searchCharacter(character))
  }

  return (
    <SearchForm onSubmit={handleSearch} />
  )
}
