import express from 'express'
import TreinadorController from '../controllers/treinador.controller.js'
import { check } from 'express-validator'


const TreinadorRouter = express.Router()

TreinadorRouter.get('/', TreinadorController.getTreinadores)
TreinadorRouter.get('/:id', TreinadorController.getTreinador)
TreinadorRouter.post('/',
  check('name', 'name deve ser informado').notEmpty(),
  check('city', 'city deve ser informada').notEmpty(),
  TreinadorController.validaRequest,
  TreinadorController.createTreinador
)

TreinadorRouter.delete('/:id', TreinadorController.deleteTreinador)
TreinadorRouter.put('/',
  check('_id', '_id deve ser informado').notEmpty(),
  TreinadorController.validaRequest,
  TreinadorController.updateTreinador
)
TreinadorRouter.get('/pokemon/:id',
  TreinadorController.getTreinadoresByPokemon
)
TreinadorRouter.patch('/pokemon',
  check('_id', '_id deve ser informado').notEmpty(),
  check('pokemon', 'pokemon deve ser informado').notEmpty(),
  TreinadorController.validaRequest,
  TreinadorController.addPokemon
)

export default TreinadorRouter
