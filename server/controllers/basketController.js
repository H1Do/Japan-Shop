const { Basket, BasketFigure } = require('../models/models');

class BasketController {
  async add(req, res) {
    const { figure_id } = req.body;
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const basket_figure = await BasketFigure.create({
      basketId: basket.id,
      figureId: figure_id,
    });
    return res.json(basket_figure);
  }

  async delete(req, res) {
    const { id } = req.params;
    if (!isNaN(id)) {
      const basket = await Basket.findOne({ where: { userId: req.user.id } });
      const basket_figure = await BasketFigure.findOne({
        where: { basketId: basket.id, figureId: id },
      });
      if (basket_figure) {
        await basket_figure.destroy();
        return res.json({ message: 'Товар успешно удалён из корзины' });
      }
    }
    return res.status(404).json({ message: 'Товар не найден' });
  }

  async getAll(req, res) {
    const basket = await Basket.findOne({ where: { userId: req.user.id } });
    const basket_figures = await BasketFigure.findAll({
      where: { basketId: basket.id },
    });
    console.log(basket_figures);
    return res.json(basket_figures);
  }
}

module.exports = new BasketController();
