const uuid = require('uuid');
const path = require('path');
const { Figure, FigureInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class FigureController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const figure = await Figure.create({ name, price, brandId, img });

      if (info) {
        info = JSON.parse(info);
        info.forEach((item) =>
          InputDeviceInfo.create({
            title: item.title,
            description: item.description,
            deviceId: figure.id,
          })
        );
      }

      return res.json(figure);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { limit = 9, page = 1 } = req.query;
    let offset = page * limit - limit;
    const figures = await Figure.findAndCountAll({ limit, offset });
    return res.json(figures);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const figure = await Figure.findOne({
      where: { id },
      include: [{ model: FigureInfo, as: 'info' }],
    });
    return res.json(figure);
  }
}

module.exports = new FigureController();
