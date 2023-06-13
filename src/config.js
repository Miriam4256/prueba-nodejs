import {config} from 'dotenv'
//uso de .env

config()

//Envía lo que hay en el puerto, si no existe envía el puerto 3000
export const PORT=process.env.PORT || 3000
//DE ARCHIVO.ENV PORT=5000
//Constantes en caso de que la nube no proporcione servidor
export const DB_USER=process.env.DB_USER || 'root'
export const DB_PASSWORD=process.env.DB_PASSWORD || ''
export const DB_HOST=process.env.DB_HOST || 'localhost'
export const DB_DATABASE=process.env.DB_DATABASE || 'prueba'
export const DB_PORT=process.env.DB_PORT || 3306

//console.log(process.env.PORT)
//console.log(process.env.DB_HOST)
//console.log(process.env.DB_USER)
//console.log(process.env.DB_PASSWORD)
//console.log(process.env.DB_DATABASE)