const app = require('./app.js')

const http = require('http')
const { loadAllPlanets } = require('./models/planets-model.js')

const PORT = 8000

const server = http.createServer(app)

const startServer = async () => {
  await loadAllPlanets()
  console.log('yes')
  server.listen(PORT, () => console.log(`Listening on ${PORT}...`))
}

startServer()