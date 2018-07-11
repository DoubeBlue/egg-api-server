"use strict";

const Controller = require("egg").Controller;

class ProductsController extends Controller {
  async index() {
    const products = await this.ctx.service.products.get();
    this.ctx.body = { products };
  }
}

module.exports = ProductsController;
