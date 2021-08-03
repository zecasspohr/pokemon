import { Request, Response } from 'express'
import TreinadorService from '../services/treinador.service.js'
import { validationResult } from 'express-validator'

async function validaRequest(req: Request, res: Response, next: any) {
  const erros = validationResult(req)
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() })
  }
  next()
}

async function createTreinador(req: Request, res: Response, next: any) {
  try {
    const treinador = req.body
    res.send(await TreinadorService.createTreinador(treinador))
  } catch (err) {
    next(err)
  }
}
async function getTreinadores(req: Request, res: Response, next: any) {
  try {
    res.send(await TreinadorService.getTreinadores())
  } catch (err) {
    next(err)
  }
}
async function getTreinador(req: Request, res: Response, next: any) {
  try {
    const id = req.params.id
    const treinador = await TreinadorService.getTreinador(id)
    res.send(treinador)
  } catch (err) {
    next(err)
  }
}
async function updateTreinador(req: Request, res: Response, next: any) {
  try {
    let novoTreinador = req.body
    let treinador = await TreinadorService.getTreinador(novoTreinador._id)
    novoTreinador = { ...treinador, ...novoTreinador }
    await TreinadorService.updateTreinador(novoTreinador)
    res.end()
  } catch (err) {
    next(err)
  }
}
async function getTreinadoresByPokemon(req: Request, res: Response, next: any) {
  try {
    const id = req.params.id
    res.send(await TreinadorService.getTreinadores(id))
  } catch (err) {
    next(err)
  }
}
async function addPokemon(req: Request, res: Response, next: any) {
  try {
    let data = req.body
    let treinador = await TreinadorService.getTreinador(data._id)

    treinador.pokemons.push(data.pokemon)
    if (treinador.pokemons.length > 7) {
      throw new Error('É permitido apenas 7 pokemons por treinador!')
    }

    await treinador.save()
    res.end()
  } catch (err) {
    next(err)
  }
}
async function deleteTreinador(req: Request, res: Response, next: any) {
  try {
    const id = req.params.id
    await TreinadorService.deleteTreinador(id)
    res.end()
  } catch (err) {
    next(err)
  }
}

export default {
  validaRequest,
  createTreinador,
  getTreinadores,
  getTreinador,
  updateTreinador,
  deleteTreinador,
  getTreinadoresByPokemon,
  addPokemon
}
