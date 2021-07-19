import express from 'express'
import PokemonController from '../controllers/pokemon.controller.js'
import multer from 'multer'
import { check } from 'express-validator'

const upload = multer({
  dest: '/arquivos/pokemon-images/'
})

const PokemonRouter = express.Router()

PokemonRouter.get('/', PokemonController.getPokemons)
PokemonRouter.get('/:id', PokemonController.getPokemon)
PokemonRouter.post('/',
  check('name', 'name deve ser informado').notEmpty(),
  check('generation', 'generation deve ser informado').notEmpty(),
  check('is_legendary', 'is_legendary deve ser informado').notEmpty(),
  check('type1', 'type1 deve ser informado').notEmpty(),
  check('abilities', 'abilities deve ser informado').notEmpty(),
  PokemonController.validaRequest,
  PokemonController.createPokemon
)

PokemonRouter.delete('/:id', PokemonController.deletePokemon)
PokemonRouter.put('/',
  check('_id', '_id deve ser informado').notEmpty(),
  PokemonController.validaRequest,
  PokemonController.updatePokemon
)

PokemonRouter.post('/upload-image',
  upload.single('image'),
  PokemonController.validaPokemon,
  PokemonController.uploadImage)

export default PokemonRouter
