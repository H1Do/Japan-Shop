const { OrderList, Order, OrderFigure } = require('../models/models');

class OrderListController {
  async add(req, res) {
    const { figures_id } = req.body;
    const order_figures = [];

    const orderList = await OrderList.findOne({
      where: { userId: req.user.id },
    });
    const order = await Order.create({
      orderListId: orderList.id,
    });
    for (let figure_id of figures_id) {
      order_figures.push(
        await OrderFigure.create({
          orderId: order.id,
          figureId: figure_id,
        })
      );
    }
    return res.json({ order, order_figures });
  }

  async getAll(req, res) {
    const orderList = await OrderList.findOne({
      where: { userId: req.user.id },
    });
    const orders = await Order.findAll({
      where: { orderListId: orderList.id },
    });
    return res.json(orders);
  }

  async getOne(req, res) {
    const { id } = req.params;

    const orderList = await OrderList.findOne({
      where: { userId: req.user.id },
    });
    const order = await Order.findOne({
      where: { id, orderListId: orderList.id },
    });
    if (order) {
      const order_figures = await Order.findAll({
        where: { orderId: order.id },
      });
      return res.json({ order, order_figures });
    }
    return res.status(404).json({ message: 'Заказ не найден' });
  }
}

module.exports = new OrderListController();
