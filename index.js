import express from 'express'
import connection from './db/connection.js'
import cors from 'cors'
import siteRouter from './src/modules/sites/sites.routes.js'

const app = express()

const port = process.env.PORT || 3000
app.use(cors())


app.use(express.json());

connection


app.use('/site', siteRouter)

app.get('/', (req, res) => res.send('Hello on my progect..!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))