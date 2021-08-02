import PokemonRepository from '../repositories/pokemon.repository.js'
import { Pokemon } from '../schema/pokemon.schema.js'
import csv from 'csvtojson'

async function createPokemon(pokemon: Pokemon) {
  return await PokemonRepository.createPokemon(pokemon)
}
async function getPokemons() {
  return await PokemonRepository.getPokemons()
}
async function getPokemon(id: String) {
  return await PokemonRepository.getPokemon(id)
}
async function deletePokemon(id: String) {
  return await PokemonRepository.deletePokemon(id)
}
async function updatePokemon(pokemon: Pokemon) {
  return await PokemonRepository.updatePokemon(pokemon)
}

async function fillPokemonsOnEmptyDatabase() {
  if (!await PokemonRepository.isEmpty()) return

  await createFromFile()
}

async function createFromFile() {
  const pokemons = (await csv({
    colParser: {
      abilities: (item) => {
        return JSON.parse(item.replace(/'/g, '"'))
      }
    }
  }).fromFile('arquivos/csv/pokemon.csv')) as Array<Pokemon>
  await PokemonRepository.createManyPokemons(pokemons)
}

export default {
  createPokemon,
  getPokemons,
  getPokemon,
  deletePokemon,
  updatePokemon,
  fillPokemonsOnEmptyDatabase
}
