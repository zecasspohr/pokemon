import "reflect-metadata";
import { ArgsType, Field, ObjectType } from "type-graphql";

@ObjectType()
class PokemonRecipe {
  @Field()
  _id: string
  @Field(type => [String])
  abilities: string[]
  @Field()
  against_bug: Number
  @Field()
  against_dark: Number
  @Field()
  against_dragon: Number
  @Field()
  against_electric: Number
  @Field()
  against_fairy: Number
  @Field()
  against_fight: Number
  @Field()
  against_fire: Number
  @Field()
  against_flying: Number
  @Field()
  against_ghost: Number
  @Field()
  against_grass: Number
  @Field()
  against_ground: Number
  @Field()
  against_ice: Number
  @Field()
  against_normal: Number
  @Field()
  against_poison: Number
  @Field()
  against_psychic: Number
  @Field()
  against_rock: Number
  @Field()
  against_steel: Number
  @Field()
  against_water: Number
  @Field()
  attack: Number
  @Field()
  base_egg_steps: Number
  @Field()
  base_happiness: Number
  @Field()
  base_total: Number
  @Field()
  capture_rate: string
  @Field()
  classfication: string
  @Field()
  defense: Number
  @Field()
  experience_growth: Number
  @Field()
  height_m: Number
  @Field()
  hp: Number
  @Field()
  japanese_name: string
  @Field()
  name: string
  @Field()
  percentage_male: string
  @Field()
  pokedex_number: string
  @Field()
  sp_attack: Number
  @Field()
  sp_defense: Number
  @Field()
  speed: Number
  @Field()
  type1: string
  @Field()
  type2: string
  @Field()
  weight_kg: string
  @Field()
  generation: string
  @Field()
  is_legendary: Number
}

@ArgsType()
class RandomPokemonArgs {
  @Field({ nullable: true })
  generation: string;

  @Field({ nullable: true })
  is_legendary: string;

  @Field({ nullable: true })
  type1: string;

  @Field({ nullable: true })
  type2: string;

  @Field({ nullable: true })
  abilities: string;
}

export {
  PokemonRecipe,
  RandomPokemonArgs
}