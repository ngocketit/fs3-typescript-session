import express from 'express'
import cors from 'cors'

import {searchMoviesByCharacter} from './service.js'

const app = express()
const port = 3001

app.use(cors())

app.get('/api/v1/characters/:name', async (req, res) => {
  try {
    const result = await searchMoviesByCharacter(req.params.name)
    res.json(result)
  } catch (err) {
    res.status(400).json({
      message: 'Something went wrong',
      error: true,
    })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
