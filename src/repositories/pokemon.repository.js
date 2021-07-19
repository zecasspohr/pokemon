import PokemonSchema from '../schema/pokemon.schema.js'
import { connect } from './db.js'

async function getPokemonModel () {
  const mongoose = await connect()
  return mongoose.model('pokemon', PokemonSchema)
}

async function createPokemon (pokemon) {
  const Pokemon = await getPokemonModel()
  pokemon = new Pokemon(pokemon)
  await pokemon.save()
}
async function createManyPokemons (pokemons) {
  const Pokemon = await getPokemonModel()
  await Pokemon.insertMany(pokemons)
}

async function getPokemons (filter = {}) {
  const Pokemon = await getPokemonModel()
  const query = Pokemon.find(filter)
  return await query.exec()
}

async function getPokemon (_id) {
  const Pokemon = await getPokemonModel()
  const query = Pokemon.findOne({ _id: _id })
  return await query.exec()
}

async function updatePokemon (pokemon) {
  const Pokemon = await getPokemonModel()
  await Pokemon.findOneAndUpdate({ _id: pokemon._id }, pokemon)
}
async function deletePokemon (_id) {
  const Pokemon = await getPokemonModel()
  await Pokemon.deleteOne({ _id })
}

async function isEmpty () {
  const Pokemon = await getPokemonModel()
  return !(await Pokemon.findOne({}).exec())
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
