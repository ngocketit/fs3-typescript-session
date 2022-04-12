import axios from 'axios'

async function getMovies(urls) {
  return await Promise.all(urls.map(url => axios.get(url).then(resp => {
    const { data } = resp
    return {
      title: data.title,
      director: data.director,
      producer: data.producer,
      releaseDate: data.release_date,
    }
  })))
}

export async function searchMoviesByCharacter(characterName) {
  try {
    const resp = await axios.get(`https://swapi.dev/api/people?search=${characterName}`)
      .then(resp => resp.data.results)
    const promises = resp.map(async item => ({
      name: item.name,
      gender: item.gender,
      movies: await getMovies(item.films),
    }))
    return await Promise.all(promises)
  } catch (err) {
    throw err
  }
}
