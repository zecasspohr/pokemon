import { DocumentType } from '@typegoose/typegoose'
import PokemonModel, { Pokemon } from '../schema/pokemon.schema.js'
import { connect } from './db.js'



async function createPokemon(pokemon: Pokemon) {
  await connect()
  await new PokemonModel(pokemon).save()
}
async function createManyPokemons(pokemons: Pokemon[]) {
  await connect()
  await PokemonModel.insertMany(pokemons)
}

async function getPokemons(filter = {}) {
  await connect()
  return await PokemonModel.find(filter).exec()
}

async function getPokemon(_id: string) {
  await connect()
  const query = PokemonModel.findOne({ _id: _id }).lean()
  return await query.exec()
}

async function updatePokemon(pokemon: DocumentType<Pokemon>) {
  await connect()
  await PokemonModel.findOneAndUpdate({ _id: pokemon._id }, pokemon)
}
async function deletePokemon(_id: string) {
  await connect()
  await PokemonModel.deleteOne({ _id })
}

async function isEmpty() {
  await connect()
  return !(await PokemonModel.findOne({}).exec())
}

export default {
  createPokemon,
  getPokemons,
  getPokemon,
  deletePokemon,
  updatePokemon,
  isEmpty,
  createManyPokemons
}
