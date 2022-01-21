const { Planet } = require('../models/models');
const ApiError = require('../error/ApiError');

class PlanetController {
  async create(req, res) {
    const { name } = req.body;
    const planet = await Planet.create({ name });
    return res.json(planet);
  }
  async getAll(req, res) {
    const planets = await Planet.findAll();
    return res.json(planets);
  }
}

module.exports = new PlanetController();
