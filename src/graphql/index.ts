import "reflect-metadata";
import { graphqlHTTP } from 'express-graphql'
import PokemonResolver from './pokemon.resolver.js'
import { buildSchemaSync } from 'type-graphql'

const schema = buildSchemaSync({
  resolvers: [PokemonResolver]
})

export default graphqlHTTP({
  schema: schema,
  graphiql: true
})
