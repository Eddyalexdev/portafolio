import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import db from './config/mongo.db'
import { router } from './route'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(router)

db().then(() => console.log('conectado a la base de datos'))

app.listen(port, () => console.log('app initial in port' + port))

