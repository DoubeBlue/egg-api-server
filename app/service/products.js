"use strict";

const Service = require("egg").Service;

class ProductsService extends Service {
  async get() {
    const products = await this.app.mysql.select("products");
    return products;
  }
}

module.exports = ProductsService;
