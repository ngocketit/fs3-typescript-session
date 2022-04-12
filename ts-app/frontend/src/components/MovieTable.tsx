import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { Movie } from '../types'

type MovieTableProps = {
  movies: Movie[]
}

export default function MovieTable({movies}: MovieTableProps) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Release date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.producer}</TableCell>
              <TableCell>{row.director}</TableCell>
              <TableCell>{row.releaseDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
