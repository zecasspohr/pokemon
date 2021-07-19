
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import PokemonRepository from '../repositories/pokemon.repository.js'
import SorteadosRepository from '../repositories/sorteados.repository.js'
import GraphQLJSON from 'graphql-type-json'

const schema = buildSchema(`
  scalar JSON
  type Query {
    getRandomPokemons(generation: String, is_legendary: String, type1: String, type2: String, abilities: String): JSON
  }
`)

const root = {
  JSON: GraphQLJSON,
  getRandomPokemons: async (args) => {
    const pokemons = await PokemonRepository.getPokemons(args)
    const sorteados = pickTenRandom(pokemons)
    await cadastraSorteados(sorteados)

    return sorteados
  }
}

async function cadastraSorteados (sorteados) {
  sorteados = [...sorteados]
  sorteados = sorteados.map((it) => { return it[0]._id })
  await SorteadosRepository.createSorteados({ pokemons: sorteados })
}

function pickTenRandom (pokemons) {
  if (pokemons.length <= 10) {
    return pokemons
  }

  const sorteados = []
  for (let i = 0; i < 10; i++) {
    const indice = generateRandomInteger(pokemons.length - 1)
    sorteados.push(pokemons.splice(indice, 1))
  }
  return sorteados
}
function generateRandomInteger (max) {
  return Math.floor(Math.random() * max) + 1
}
export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
})
