import TreinadorModel, { Treinador } from '../schema/treinador.schema.js'
import { connect } from './db.js'
import mongoose from 'mongoose'
import { DocumentType } from '@typegoose/typegoose'

async function createTreinador(treinador: Treinador) {
  await connect()
  await new TreinadorModel(treinador).save()
}

async function getTreinadores(filter = {}): Promise<Treinador[]> {
  await connect()
  return await TreinadorModel.find(filter).exec()
}

async function getTreinador(_id: string, populate: boolean = false) {
  await connect()
  return await TreinadorModel.findOne({ _id: _id }).exec()
}

async function updateTreinador(treinador: DocumentType<Treinador>) {
  await connect()
  await TreinadorModel.findOneAndUpdate({ _id: treinador._id }, treinador)
}

async function deleteTreinador(_id: string) {
  await connect()
  await TreinadorModel.deleteOne({ _id })
}

async function getTreinadoresByPokemon(_id: string) {
  await connect()
  return await TreinadorModel.find({ pokemons: new mongoose.Types.ObjectId(_id) }).lean().exec()
}
export default {
  createTreinador,
  getTreinadores,
  getTreinador,
  deleteTreinador,
  updateTreinador,
  getTreinadoresByPokemon
}
