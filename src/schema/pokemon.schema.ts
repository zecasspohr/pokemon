import { getModelForClass, prop } from '@typegoose/typegoose'
import mongoose from 'mongoose'

class PokemonClass {
  @prop({ type: () => [String] })
  public abilities: string[];
  @prop()
  public against_bug: number;
  @prop()
  public against_dark: number;
  @prop()
  public against_dragon: number;
  @prop()
  public against_electric: number;
  @prop()
  public against_fairy: number;
  @prop()
  public against_fight: number;
  @prop()
  public against_fire: number;
  @prop()
  public against_flying: number;
  @prop()
  public against_ghost: number;
  @prop()
  public against_grass: number;
  @prop()
  public against_ground: number;
  @prop()
  public against_ice: number;
  @prop()
  public against_normal: number;
  @prop()
  public against_poison: number;
  @prop()
  public against_psychic: number;
  @prop()
  public against_rock: number;
  @prop()
  public against_steel: number;
  @prop()
  public against_water: number;
  @prop()
  public attack: number;
  @prop()
  public base_egg_steps: number;
  @prop()
  public base_happiness: number;
  @prop()
  public base_total: number;
  @prop()
  public capture_rate: string;
  @prop()
  public classfication: string;
  @prop()
  public defense: number;
  @prop()
  public experience_growth: number;
  @prop()
  public height_m: number;
  @prop()
  public hp: number;
  @prop()
  public japanese_name: string;
  @prop()
  public name: string;
  @prop()
  public percentage_male: string;
  @prop()
  public pokedex_number: string;
  @prop()
  public sp_attack: number;
  @prop()
  public sp_defense: number;
  @prop()
  public speed: number;
  @prop()
  public type1: string;
  @prop()
  public type2: string;
  @prop()
  public weight_kg: string;
  @prop()
  public generation: string;
  @prop()
  public is_legendary: number;
}

const PokemonModel = getModelForClass(PokemonClass, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'pokemon' }
})
export {
  PokemonClass as Pokemon
}
export default PokemonModel
