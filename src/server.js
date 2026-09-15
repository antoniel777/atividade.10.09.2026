import express from 'express'
import equipamentosRoutes from './routes/equipamentos.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Servidor funcionando'
    })
})

app.use('/equipamentos', equipamentosRoutes)

app.listen(port, () => {
    console.log(`app rodando em http://localhost:${port}`)
})