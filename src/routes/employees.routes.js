//PARA CREAR GRUPOS DE RUTAS
import {Router} from 'express'
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../controllers/employees.controllers.js'


const router = Router()
//en vez de app usar router
//router.get('/employees',(req, res) => res.send('obteniendo empleados'))
router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

//router.post('/employees',(req, res) => res.send('creando empleados'))
router.post('/employees', createEmployees)

//router.put('/employees',(req, res) => res.send('actualizar empleados'))
router.patch('/employees/:id',updateEmployees) //actualizar parcialmente //put actualizar todo

//router.delete('/employees',(req, res) => res.send('eliminar empleados'))
router.delete('/employees/:id',deleteEmployees)
export default router