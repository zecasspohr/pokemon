import express from 'express'
import PokemonRouter from './routes/pokemon.route.js'
import SorteadosRouter from './routes/sorteados.route.js'
import PokemonService from './services/pokemon.service.js'
import GraphQLRoute from './graphql/index.js'
import TreinadorRouter from './routes/treinador.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Pokemon API!')
})

app.use('/pokemon', PokemonRouter)
app.use('/treinador', TreinadorRouter)
app.use('/sorteados', SorteadosRouter)
app.use('/graphql', GraphQLRoute)

app.listen(3000, async () => {
  const myArgs = process.argv.slice(2)
  if (myArgs.includes('filldb')) {
    await PokemonService.fillPokemonsOnEmptyDatabase()
  }
  console.log('Server rodando!')
})
