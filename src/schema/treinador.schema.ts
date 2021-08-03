import { getModelForClass, Prop, Ref } from '@typegoose/typegoose'
import mongoose from 'mongoose'
import { Pokemon } from './pokemon.schema.js'

class TreinadorClass {
  @Prop()
  public name: string;
  @Prop()
  public city: string;
  @Prop({ default: [], ref: 'Pokemon', type: () => Pokemon })
  public pokemons: Ref<Pokemon>[] = [];
}

const TreinadorModel = getModelForClass(TreinadorClass, {
  existingMongoose: mongoose,
  schemaOptions: { collection: 'treinador' }
})

export { TreinadorClass as Treinador }
export default TreinadorModel
