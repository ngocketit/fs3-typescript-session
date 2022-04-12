import axios from 'axios'

import { SearchResult } from '../types'

export async function searchMovie(character: string) {
  return axios.get<SearchResult>(`http://localhost:3001/api/v1/characters/${character}`)
    .then(resp => resp.data)
}

