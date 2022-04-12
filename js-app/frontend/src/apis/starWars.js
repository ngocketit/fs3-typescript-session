import axios from 'axios'

export function searchMovie(character) {
  return axios.get(`http://localhost:3001/api/v1/characters/${character}`)
    .then(resp => resp.data)
}

