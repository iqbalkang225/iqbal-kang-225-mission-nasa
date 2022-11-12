const {parse} = require('csv-parse')
const path = require('path')
const fs = require('node:fs')

const habitablePlanets = []

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

const loadAllPlanets = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname,'..', '..', 'data', 'kepler_data.csv'))
      .pipe(parse({comment: '#', columns: true}))
      .on('error', (error) => console.log(error))
      .on('data', (data) => isHabitablePlanet(data) && habitablePlanets.push(data))
      .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets found!`)
        resolve()
      })
  })
}



module.exports = {loadAllPlanets, planets: habitablePlanets}
