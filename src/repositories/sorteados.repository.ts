import SorteadosModel from '../schema/sorteados.schema.js'
import { connect } from './db.js'

async function createSorteados(pokemons: any) {
  await connect()
  await new SorteadosModel(pokemons).save()
}
async function getSorteados() {
  await connect()
  return await SorteadosModel.find().populate('pokemons').exec()
}

export default {
  createSorteados,
  getSorteados
}
