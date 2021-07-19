import PokemonRepository from '../repositories/pokemon.repository.js'
import csv from 'csvtojson'

async function createPokemon (pokemon) {
  if (pokemon.abilities && typeof pokemon.abilities === 'string') {
    pokemon.abilities = JSON.parse(pokemon.abilities.replace(/'/g, '"'))
  }
  return await PokemonRepository.createPokemon(pokemon)
}
async function getPokemons () {
  return await PokemonRepository.getPokemons()
}
async function getPokemon (id) {
  return await PokemonRepository.getPokemon(id)
}
async function deletePokemon (id) {
  return await PokemonRepository.deletePokemon(id)
}
async function updatePokemon (pokemon) {
  return await PokemonRepository.updatePokemon(pokemon)
}

async function fillPokemonsOnEmptyDatabase () {
  if (!await PokemonRepository.isEmpty()) return

  await createFromFile()
}

async function createFromFile () {
  const pokemons = await csv({
    colParser: {
      abilities: (item) => {
        return JSON.parse(item.replace(/'/g, '"'))
      }
    }
  }).fromFile('arquivos/csv/pokemon.csv')
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
