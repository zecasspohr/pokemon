import mongoose from 'mongoose'

const Pokemon = new mongoose.Schema(
  {
    abilities: [String],
    against_bug: Number,
    against_dark: Number,
    against_dragon: Number,
    against_electric: Number,
    against_fairy: Number,
    against_fight: Number,
    against_fire: Number,
    against_flying: Number,
    against_ghost: Number,
    against_grass: Number,
    against_ground: Number,
    against_ice: Number,
    against_normal: Number,
    against_poison: Number,
    against_psychic: Number,
    against_rock: Number,
    against_steel: Number,
    against_water: Number,
    attack: Number,
    base_egg_steps: Number,
    base_happiness: Number,
    base_total: Number,
    capture_rate: String,
    classfication: String,
    defense: Number,
    experience_growth: Number,
    height_m: Number,
    hp: Number,
    japanese_name: String,
    name: String,
    percentage_male: String,
    pokedex_number: String,
    sp_attack: Number,
    sp_defense: Number,
    speed: Number,
    type1: String,
    type2: String,
    weight_kg: String,
    generation: String,
    is_legendary: Number
  }, { collection: 'pokemon' }
)

export default Pokemon