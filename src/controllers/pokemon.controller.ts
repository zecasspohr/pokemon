import { Request, Response } from 'express'
import PokemonService from '../services/pokemon.service.js'
import { validationResult } from 'express-validator'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { promises as fs } from 'fs'

async function validaRequest(req: Request, res: Response, next: any) {
  const erros = validationResult(req)
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() })
  }
  next()
}

async function createPokemon(req: Request, res: Response, next: any) {
  try {
    const pokemon = req.body
    if (pokemon.abilities && typeof pokemon.abilities === 'string') {
      pokemon.abilities = JSON.parse(pokemon.abilities.replace(/'/g, '"'))
    }
    res.send(await PokemonService.createPokemon(pokemon))
  } catch (err) {
    next(err)
  }
}
async function getPokemons(req: Request, res: Response, next: any) {
  try {
    res.send(await PokemonService.getPokemons())
  } catch (err) {
    next(err)
  }
}
async function getPokemon(req: Request, res: Response, next: any) {
  try {
    const id = req.params.id
    res.send(await PokemonService.getPokemon(id))
  } catch (err) {
    next(err)
  }
}
async function updatePokemon(req: Request, res: Response, next: any) {
  try {
    let novoPokemon = req.body
    let pokemon = await PokemonService.getPokemon(novoPokemon._id)
    novoPokemon = { ...pokemon, ...novoPokemon }
    await PokemonService.updatePokemon(novoPokemon)
    res.end()
  } catch (err) {
    next(err)
  }
}
async function deletePokemon(req: Request, res: Response, next: any) {
  try {
    const id = req.params.id
    await PokemonService.deletePokemon(id)
    res.end()
  } catch (err) {
    next(err)
  }
}

async function validaPokemon(req: Request, res: Response, next: any) {
  const pokemon = req.body
  const exists = await PokemonService.getPokemon(pokemon._id)
  if (!exists) {
    return res.status(400).json({ erro: `Pokemon '${pokemon._id}' não encontrado!` })
  }
  next()
}

const allowedExtensions = ['png', 'jpg']

async function uploadImage(req: Request, res: Response, next: any) {
  try {
    const pokemon = req.body
    const ext = path.extname(req.file.originalname)
    const tempPath = req.file.path

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const targetPath = path.join(__dirname, `../../arquivos/images/${pokemon._id}.${ext}`)

    if (allowedExtensions.includes(ext.toLowerCase())) {
      await fs.unlink(tempPath)
      return res.status(403).end('Extensão não permitida')
    }

    await fs.rename(tempPath, targetPath)
    res.status(200).end('Imagem enviada!')
  } catch (err) {
    next(err)
  }
}

export default {
  validaRequest,
  createPokemon,
  getPokemons,
  getPokemon,
  updatePokemon,
  deletePokemon,
  validaPokemon,
  uploadImage
}
