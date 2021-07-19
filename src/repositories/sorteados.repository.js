import SorteadosSchema from '../schema/sorteados.schema.js'
import PokemonSchema from '../schema/pokemon.schema.js'
import { connect } from './db.js'

async function GetSorteadosConnection () {
  const mongoose = await connect()
  mongoose.model('pokemon', PokemonSchema)
  return mongoose.model('sorteados', SorteadosSchema)
}

async function createSorteados (sorteados) {
  const Sorteados = await GetSorteadosConnection()
  sorteados = new Sorteados(sorteados)
  await sorteados.save()
}
async function getSorteados () {
  const Sorteados = GetSorteadosConnection()
  const query = Sorteados.find().populate('pokemon')

  return await query.exec()
}

export default {
  createSorteados,
  getSorteados
}
