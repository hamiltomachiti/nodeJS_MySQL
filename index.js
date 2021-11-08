const express = require('express')
const app = express()
app.use(express.json())
const mysql = require('mysql2')

app.get('/medicos', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'hospital',
        password: '16181055'
    })

    connection.query('SELECT * FROM tb_medico', (err, results, fields) => {
        console.log(results)
        res.send('OK')
    })

})

const porta = 3000
app.listen(porta, () =>
    console.log(`Executando. Porta ${porta}`)
);