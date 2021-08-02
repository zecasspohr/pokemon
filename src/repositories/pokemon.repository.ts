import PokemonSchema, { Pokemon } from '../schema/pokemon.schema.js'
import { connect } from './db.js'

async function getPokemonModel() {
  const mongoose = await connect()
  return mongoose.model<Pokemon>('pokemon', PokemonSchema)
}

async function createPokemon(pokemon: Pokemon) {
  const Pokemon = await getPokemonModel()
  await new Pokemon(pokemon).save()
}
async function createManyPokemons(pokemons: Pokemon[]) {
  const Pokemon = await getPokemonModel()
  await Pokemon.insertMany(pokemons)
}

async function getPokemons(filter = {}): Promise<Pokemon[]> {
  const Pokemon = await getPokemonModel()
  return (await Pokemon.find(filter).exec()) as Pokemon[]
}

async function getPokemon(_id: String) {
  const Pokemon = await getPokemonModel()
  const query = Pokemon.findOne({ _id: _id })
  return await query.exec()
}

async function updatePokemon(pokemon: Pokemon) {
  const Pokemon = await getPokemonModel()
  await Pokemon.findOneAndUpdate({ _id: pokemon._id }, pokemon)
}
async function deletePokemon(_id: String) {
  const Pokemon = await getPokemonModel()
  await Pokemon.deleteOne({ _id })
}

async function isEmpty() {
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
