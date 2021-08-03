import { getModelForClass, Prop, Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { Pokemon } from './pokemon.schema.js'

class SorteadosClass {
  @Prop({ default: [], ref: 'Pokemon', type: () => Pokemon })
  public pokemons: Ref<Pokemon>[] = []
}

const SorteadosModel = getModelForClass(SorteadosClass, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'sorteados' }
})
export { SorteadosClass as Sorteados }
export default SorteadosModel
