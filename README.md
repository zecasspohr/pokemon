# Pokemon API
API para cadastro e consulta de pokemons<br>
GraphQL: getRandomPokemons() retorna 10 pokemons aleatórios com possibilidade de filtros<br>
<br>
O Arquivo .env deve possuir DB_CONNECTION= url de conexão para o MongoDB Atlas<br>
<br>
Para inicializar o projeto preenchendo um banco de dados vazio com os dados do pokemon.csv, deve-se utilizar a flag "filldb"<br>
Exemplo: node src/server.js filldb

### Melhorias

- [ ] Porta da aplicação dentro do arquivo .env
- [ ] get dos pokemons sorteados, retornar os dados dos pokemons
- [ ] No upload, criar pasta destino se não existir
- [ ] Upload de multiplas imagens para o mesmo pokemon
- [ ] Endpoint para retornar a imagem do pokemon
