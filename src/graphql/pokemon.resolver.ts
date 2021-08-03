import "reflect-metadata";
import pokemonRepository from "../repositories/pokemon.repository.js";
import sorteadosRepository from "../repositories/sorteados.repository.js";
import { Pokemon } from "../schema/pokemon.schema.js";
import { Args, Mutation, Query, Resolver } from "type-graphql";
import { PokemonRecipe, RandomPokemonArgs } from "./pokemon.recipe.js";
import { DocumentType } from "@typegoose/typegoose";

@Resolver()
class PokemonResolver {
  @Query(returns => [PokemonRecipe])
  async getRandomPokemons(@Args() { generation, is_legendary, type1, type2, abilities }: RandomPokemonArgs) {
    let filter: any = removeUndefined({ generation, is_legendary, type1, type2, abilities })

    const pokemons = await pokemonRepository.getPokemons(filter)
    const sorteados = pickTenRandom(pokemons)
    await cadastraSorteados(sorteados)

    return sorteados
  }
}

function removeUndefined(obj: any) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  });
  return obj
}

async function cadastraSorteados(pokemons: DocumentType<Pokemon>[]) {
  const pokemonsId = pokemons.map((it) => { return it._id })
  await sorteadosRepository.createSorteados({ pokemons: pokemonsId })
}

function pickTenRandom(pokemons: DocumentType<Pokemon>[]): DocumentType<Pokemon>[] {
  if (pokemons.length <= 10) {
    return pokemons
  }

  const sorteados: DocumentType<Pokemon>[] = []
  for (let i = 0; i < 10; i++) {
    const indice = generateRandomInteger(pokemons.length - 1)
    const pokemon: DocumentType<Pokemon> = pokemons.splice(indice, 1)[0]
    sorteados.push(pokemon)
  }
  return sorteados
}
function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1
}

export default PokemonResolver
