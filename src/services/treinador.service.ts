import TreinadorRepository from '../repositories/treinador.repository.js'
import { Treinador } from '../schema/treinador.schema.js'

async function createTreinador(treinador: Treinador) {
  return await TreinadorRepository.createTreinador(treinador)
}
async function getTreinadores(pokemonId?: string) {
  if (pokemonId) {
    return await TreinadorRepository.getTreinadoresByPokemon(pokemonId)
  }
  return await TreinadorRepository.getTreinadores()
}
async function getTreinador(id: string) {
  return await TreinadorRepository.getTreinador(id)
}
async function deleteTreinador(id: string) {
  return await TreinadorRepository.deleteTreinador(id)
}
async function updateTreinador(treinador: Treinador) {
  return await TreinadorRepository.updateTreinador(treinador)
}

export default {
  createTreinador,
  getTreinadores,
  getTreinador,
  deleteTreinador,
  updateTreinador
}
