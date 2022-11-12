const {planets} = require('../../models/planets-model')

const getAllPlanets = (req, res) => {
  res.json(planets)
}

module.exports = {getAllPlanets}
