import SorteadosSchema from '../schema/sorteados.schema.js'
import PokemonSchema, { Pokemon } from '../schema/pokemon.schema.js'
import { connect } from './db.js'

async function GetSorteadosConnection() {
  const mongoose = await connect()
  mongoose.model('pokemon', PokemonSchema)
  return mongoose.model('sorteados', SorteadosSchema)
}

async function createSorteados(sorteados: String[]) {
  const Sorteados = await GetSorteadosConnection()
  await new Sorteados({ pokemons: sorteados }).save()
}
async function getSorteados() {
  const Sorteados = await GetSorteadosConnection()
  return await Sorteados.find().populate('pokemon').exec()
}

export default {
  createSorteados,
  getSorteados
}
