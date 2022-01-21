const uuid = require('uuid');
const path = require('path');

const { Superhero, SuperheroInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class SuperheroController {
  async create(req, res, next) {
    try {
      let { nickname, info, planetId, universId } = req.body;
      const { images } = req.files;
      let fileName = uuid.v4() + '.jpeg';
      images.mv(path.resolve(__dirname, '..', 'static', fileName));
      const superhero = await Superhero.create({
        nickname,
        planetId,
        univerId: universId,
        images: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach(i => {
          SuperheroInfo.create({
            title: i.title,
            description: i.description,
            real_name: i.real_name,
            origin_description: i.origin_description,
            superpowers: i.superpowers,
            catch_phrase: i.catch_phrase,
            superheroId: superhero.id,
          });
        });
      }

      return res.json(superhero);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { planetId, univerId, limit, page } = req.query;

    page = page || 1;
    limit = limit || 5;
    let offset = page * limit - limit;
    let superhero;
    if (!planetId && !univerId) {
      superhero = await Superhero.findAndCountAll({ limit, offset });
    }
    if (planetId && !univerId) {
      superhero = await Superhero.findAndCountAll({
        where: { planetId },
        limit,
        offset,
      });
    }
    if (!planetId && univerId) {
      superhero = await Superhero.findAndCountAll({
        where: { univerId },
        limit,
        offset,
      });
    }
    if (planetId && univerId) {
      superhero = await Superhero.findAndCountAll({
        where: { univerId, planetId },
        limit,
        offset,
      });
    }
    return res.json(superhero);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const superhero = await Superhero.findOne({
      where: { id },
      include: [{ model: SuperheroInfo, as: 'info' }],
    });
    return res.json(superhero);
  }
}

module.exports = new SuperheroController();
