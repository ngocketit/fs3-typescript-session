import axios from 'axios'

async function getMovies(urls: string[]) {
  return await Promise.all(urls.map(url => axios.get(url).then((resp: any) => {
    const { data } = resp
    return {
      title: data.title,
      director: data.director,
      producer: data.producer,
      releaseDate: data.release_date,
    }
  })))
}

export async function searchMoviesByCharacter(characterName: string) {
  try {
    const resp = await axios.get(`https://swapi.dev/api/people?search=${characterName}`)
      .then((resp: any) => resp.data.results)
    const promises = resp.map(async (item: any) => ({
      name: item.name,
      gender: item.gender,
      movies: await getMovies(item.films),
    }))
    return await Promise.all(promises)
  } catch (err) {
    throw err
  }
}
