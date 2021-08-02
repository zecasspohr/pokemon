import express from 'express'
import SorteadosRepository from '../repositories/sorteados.repository.js'

const SorteadosRouter = express.Router()

SorteadosRouter.get('/', async (_, res) => {
  res.send(await SorteadosRepository.getSorteados())
})

export default SorteadosRouter
