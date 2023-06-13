//Importar librería Express
import express from 'express'
//import {pool} from './db.js'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from './config.js'

//Guardar en una constante
const app = express()

app.use(express.json())
//EJEMPLO PARA COMPROBAR CONEXIÓN
//app.get('/ping', async (req, res) => {
//  const [result] = await pool.query('SELECT "Pong" AS result')  
//  res.json(result[0])
//});

app.use(indexRoutes)

//Se manda llamar archivo de la carpeta router 1
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'NOT FOUND API'
    })
})

export default app;