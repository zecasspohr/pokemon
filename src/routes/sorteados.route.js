import express from 'express'
import SorteadosRepository from '../repositories/sorteados.repository.js'

const SorteadosRouter = express.Router()

SorteadosRouter.get('/', async (req, res) => {
  res.send(await SorteadosRepository.getSorteados())
})
SorteadosRouter.get('/:id', async (req, res) => {

})

export default SorteadosRouter
