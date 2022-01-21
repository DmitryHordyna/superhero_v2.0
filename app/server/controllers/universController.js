const { Univers } = require('../models/models');
const ApiError = require('../error/ApiError');

class UniversController {
  async create(req, res) {
    const { name } = req.body;
    const univers = await Univers.create({ name });
    return res.json(univers);
  }
  async getAll(req, res) {
    const universes = await Univers.findAll();
    return res.json(universes);
  }
  async deleteOne(req, res) {
    const universes = await Univers.findOne();
    return res.json(universes);
  }
}

module.exports = new UniversController();
