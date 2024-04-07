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

const OrderList = sequelize.define('order_list', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketFigure = sequelize.define('basket_figure', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const FavoriteFigure = sequelize.define('favorite_figure', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const OrderFigure = sequelize.define('order_figure', {
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

User.hasOne(OrderList);
OrderList.belongsTo(User);

Basket.hasMany(BasketFigure);
BasketFigure.belongsTo(Basket);

Favorite.hasMany(FavoriteFigure);
FavoriteFigure.belongsTo(Favorite);

OrderList.hasMany(Order);
Order.belongsTo(OrderList);

Order.hasMany(OrderFigure);
OrderFigure.belongsTo(Order);

Brand.hasMany(Figure);
Figure.belongsTo(Brand);

Figure.hasMany(FigureInfo, { as: 'info' });
FigureInfo.belongsTo(Figure);

Figure.hasMany(BasketFigure);
BasketFigure.belongsTo(Figure);

Figure.hasMany(FavoriteFigure);
FavoriteFigure.belongsTo(Figure);

Figure.hasMany(OrderFigure);
OrderFigure.belongsTo(Figure);

module.exports = {
  User,
  Basket,
  Favorite,
  Figure,
  OrderList,
  Order,
  BasketFigure,
  FavoriteFigure,
  OrderFigure,
  Brand,
  FigureInfo,
};
