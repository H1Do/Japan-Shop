const { Favorite, FavoriteFigure } = require('../models/models');

class FavoriteController {
  async add(req, res) {
    const { figure_id } = req.body;
    const favorite = await Favorite.findOne({ where: { userId: req.user.id } });
    const favorite_figure = await FavoriteFigure.create({
      favoriteId: favorite.id,
      figureId: figure_id,
    });
    return res.json(favorite_figure);
  }

  async delete(req, res) {
    const { figure_id } = req.body;
    const favorite = await Favorite.findOne({ where: { userId: req.user.id } });
    const favorite_figure = await FavoriteFigure.findOne({
      where: { favoriteId: favorite.id, figureId: figure_id },
    });
    if (favorite_figure) {
      favorite_figure.destroy();
      return res.json({ message: 'Товар успешно удалён из списка желаний' });
    }
    return res.status(404).json({ message: 'Товар не найден' });
  }

  async getAll(req, res) {
    const favorite = await Favorite.findOne({ where: { userId: req.user.id } });
    const favorite_figures = await FavoriteFigure.findAll({
      where: { favoriteId: favorite.id },
    });
    console.log(favorite_figures);
    return res.json(favorite_figures);
  }
}

module.exports = new FavoriteController();
