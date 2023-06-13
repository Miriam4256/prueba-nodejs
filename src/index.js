import app from './app.js'
import { PORT } from './config.js'
//RUTAS BÁSICAS----------------------------------------------------------
//Solo devuelve un texto
//app.get('/employees',(req, res) => res.send('obteniendo empleados'))

//app.post('/employees',(req, res) => res.send('creando empleados'))

//app.put('/employees',(req, res) => res.send('actualizar empleados'))

//app.delete('/employees',(req, res) => res.send('eliminar empleados'))

//Que escuche en el puerto 3000
//Toma el pueerto que te dé el servidor en la nube
app.listen(PORT)
console.log('Server running on port', PORT)