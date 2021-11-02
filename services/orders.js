const axios = require('axios');

class OrdersService {
  async findFulfillmentOrders() {
    try {
      const { data } = await axios({
        method: 'get',
        url: 'https://felipe-store-2-0.myshopify.com/admin/api/2021-10/orders.json?fulfillment_status=shipped',
        headers: {
          'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        }
      });
      const quantity = data.orders.length;
      return quantity;
    } catch (error) {
      response.json({
        message: error.message,
      })
    }
  }
}

module.exports = OrdersService;
