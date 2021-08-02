
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import PokemonRepository from '../repositories/pokemon.repository.js'
import SorteadosRepository from '../repositories/sorteados.repository.js'
import GraphQLJSON from 'graphql-type-json'
import { Pokemon } from '../schema/pokemon.schema.js'

const schema = buildSchema(`
  scalar JSON
  type Query {
    getRandomPokemons(generation: String, is_legendary: String, type1: String, type2: String, abilities: String): JSON
  }
`)

const root = {
  JSON: GraphQLJSON,
  getRandomPokemons: async (args: any) => {
    const pokemons = await PokemonRepository.getPokemons(args)
    const sorteados = pickTenRandom(pokemons)
    await cadastraSorteados(sorteados)

    return sorteados
  }
}

async function cadastraSorteados(pokemons: Pokemon[]) {
  const pokemonsId = pokemons.map((it) => { return it._id })
  await SorteadosRepository.createSorteados(pokemonsId)
}

function pickTenRandom(pokemons: Pokemon[]): Pokemon[] {
  if (pokemons.length <= 10) {
    return pokemons
  }

  const sorteados: Pokemon[] = []
  for (let i = 0; i < 10; i++) {
    const indice = generateRandomInteger(pokemons.length - 1)
    const pokemon: Pokemon = pokemons.splice(indice, 1)[0]
    sorteados.push(pokemon)
  }
  return sorteados
}
function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1
}
export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
})
