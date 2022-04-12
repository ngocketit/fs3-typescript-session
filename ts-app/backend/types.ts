export type Movie = {
  title: string
  director: string
  producer: string
  releaseDate: string
}

export type SearchResult = Array<{
  name: string
  gender: string
  movies: Movie[]
}>
