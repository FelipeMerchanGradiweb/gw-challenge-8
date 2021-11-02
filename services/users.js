const axios = require('axios');

class UsersService {
  async findVipUsers() {
    try {
      const { data } = await axios({
        method: 'get',
        url: 'https://felipe-store-2-0.myshopify.com/admin/api/2021-10/customers/search.json?query=customer_tag:VIP',
        headers: {
          'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        }
      });

      const quantity = data.customers.length;
      return quantity;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UsersService;
