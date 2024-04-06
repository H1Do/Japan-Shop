const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Favorite = sequelize.define('favorite', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketFigure = sequelize.define('basket_figure', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const FavoriteFigure = sequelize.define('favorite_figure', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Figure = sequelize.define('figure', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Brand = sequelize.define('brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const FigureInfo = sequelize.define('figure_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Favorite);
Favorite.belongsTo(User);

Basket.hasMany(BasketFigure);
BasketFigure.belongsTo(Basket);

Favorite.hasMany(FavoriteFigure);
FavoriteFigure.belongsTo(Favorite);

Brand.hasMany(Figure);
Figure.belongsTo(Brand);

Figure.hasMany(FigureInfo, { as: 'info' });
FigureInfo.belongsTo(Figure);

BasketFigure.hasOne(Figure);
Figure.belongsTo(BasketFigure);

FavoriteFigure.hasOne(Figure);
Figure.belongsTo(FavoriteFigure);

// Figure.hasMany(BasketFigure);
// BasketFigure.belongsTo(Figure);

// Figure.hasMany(FavoriteFigure);
// FavoriteFigure.belongsTo(Figure);

module.exports = {
  User,
  Basket,
  Favorite,
  Figure,
  BasketFigure,
  FavoriteFigure,
  Brand,
  FigureInfo,
};
