import { Router } from 'express'
import EquipamentosService from '../services/equipamentos.service.js'

const router = Router()

const service = new EquipamentosService()

router.get('/', async (req, res) => {
    const equipamentos = await service.listarEquipamentos()

    res.json(equipamentos)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const equipamento = await service.buscarEquipamentoPorId(id)

    if (!equipamento) {
        return res.status(404).json({
            mensagem: 'Equipamento não encontrado'
        })
    }

    res.json(equipamento)
})

router.post('/', async (req, res) => {
    const { nome, categoria, condicao_uso, disponivel } = req.body

    const equipamento = await service.cadastrarEquipamento(
        nome,
        categoria,
        condicao_uso,
        disponivel
    )

    res.status(201).json(equipamento)
})

router.patch('/:id/disponibilidade', async (req, res) => {
    const { id } = req.params
    const { disponivel } = req.body

    const equipamento = await service.alterarDisponibilidade(
        id,
        disponivel
    )

    if (!equipamento) {
        return res.status(404).json({
            mensagem: 'Equipamento não encontrado'
        })
    }

    res.json(equipamento)
})

export default router