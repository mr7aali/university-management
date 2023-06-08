import express, { Application, Request, Response } from 'express'
import usersRoute from '../src/app/modules/users/users.route'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRoute)
//testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Unniversity ')
})

export default app
