import mongoose from 'mongoose'
import { Pokemon } from './pokemon.schema.js'

interface Treinador {
  _id?: string,
  name: string,
  city: string,
  pokemons: Pokemon[] | string
}

const TreinadorSchema = new mongoose.Schema(
  {
    name: String,
    city: String,
    pokemons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pokemon'
    }]
  }, { collection: 'treinador' }
)

export { Treinador }
export default TreinadorSchema
