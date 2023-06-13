import {pool} from '../db.js'

export const getEmployees = async(req, res) => {
    //throw new Error ('My Error')
    try{
    const [rows] = await pool.query('SELECT * FROM datos')
    res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getEmployee = async (req, res) => {
    try{
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT*FROM datos WHERE id_datos = ?', [req.params.id])
    //console.log(rows)

    if(rows.length <= 0) return res.status (404).json({
        message: 'Employee not found'
    })

    res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

//export const createEmployees = (req, res) => res.send('creando empleados')
export const createEmployees = async (req, res) => {
    try{
    const {nombre, edad} = req.body
    const [rows] = await pool.query('INSERT INTO datos (nombre, edad) VALUES (?,?)',[nombre, edad])
    //res.send({rows})
    res.send({
        id: rows.insertId,
        nombre,
        edad,
    })
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const deleteEmployees = async (req, res) => {
    try{
    const [result] = await pool.query('DELETE FROM datos WHERE id_datos= ?',[req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Employee not found'
    })
    
    res.sendStatus(204)
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const updateEmployees = async (req, res) => {
    const {id} = req.params
    const {nombre, edad} = req.body 
    try{
        //IF NULL NO MODIFICA DATOS
    const [result] = await pool.query('UPDATE datos SET nombre = IFNULL(?, nombre), edad = IFNULL(?, edad) WHERE id_datos= ?', [nombre, edad, id])
    
    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM datos WHERE id_datos=?', [id])

    res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

