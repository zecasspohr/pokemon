import PokemonSchema, { Pokemon } from '../schema/pokemon.schema.js'
import TreinadorSchema, { Treinador } from '../schema/treinador.schema.js'
import { connect } from './db.js'
import { ObjectId } from 'mongoose'

async function getTreinadorModel() {
  const mongoose = await connect()
  return mongoose.model<Treinador>('treinador', TreinadorSchema)
}

async function createTreinador(treinador: Treinador) {
  const Treinador = await getTreinadorModel()
  await new Treinador(treinador).save()
}

async function getTreinadores(filter = {}): Promise<Treinador[]> {
  const Treinador = await getTreinadorModel()
  return await Treinador.find(filter).lean().exec()
}

async function getTreinador(_id: string) {
  const mongoose = await connect()
  const Treinador = mongoose.model<Treinador>('treinador', TreinadorSchema)
  mongoose.model<Pokemon>('pokemon', PokemonSchema)
  return await Treinador.findOne({ _id: _id }).populate('pokemons').lean().exec()
}

async function updateTreinador(treinador: Treinador) {
  const Treinador = await getTreinadorModel()
  await Treinador.findOneAndUpdate({ _id: treinador._id }, treinador)
}

async function deleteTreinador(_id: string) {
  const Treinador = await getTreinadorModel()
  await Treinador.deleteOne({ _id })
}
async function getTreinadoresByPokemon(_id: string) {
  const Treinador = await getTreinadorModel()
  return await Treinador.find({ pokemons: _id }).lean().exec()
}
export default {
  createTreinador,
  getTreinadores,
  getTreinador,
  deleteTreinador,
  updateTreinador,
  getTreinadoresByPokemon
}
