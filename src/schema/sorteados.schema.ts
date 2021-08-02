import mongoose from 'mongoose'
import { Pokemon } from './pokemon.schema.js'

interface Sorteados {
  pokemons: Pokemon[]
}

const SorteadosSchema = new mongoose.Schema(
  {
    pokemons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pokemon'
    }]
  }, { collection: 'sorteados' }
)
export { Sorteados }
export default SorteadosSchema
