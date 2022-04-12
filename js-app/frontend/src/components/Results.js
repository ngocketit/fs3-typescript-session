import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'

import MovieTable from './MovieTable'
import CharacterInfo from './CharacterDetail'
import useSearchCharacter from '../hooks/useSearchCharacter'

export default function Results() {
  const { character } = useParams()
  const data = useSearchCharacter(character)

  if (!data) {
    return null
  }

  return (
    <>
      {data.map(item => (
        <Paper variant="outlined" sx={{mb: 3, padding: 2}} key={item.name}>
          <Stack direction="column" spacing={2} sx={{mb: 2}}>
            <CharacterInfo name={item.name} gender={item.gender} />
            <MovieTable movies={item.movies} />
          </Stack>
        </Paper>
      ))}
    </>
  )
}
