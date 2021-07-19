import mongoose from 'mongoose'

const Sorteados = new mongoose.Schema(
  {
    pokemons: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'pokemon'
    }]
  }, { collection: 'sorteados' }
)
export default Sorteados
