'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  // get /api
  async index() {
    const { ctx } = this;
    ctx.body = ctx.request;
  }
  // get /api/:info
  async show() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }

  // post /api
  async create() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }
}

module.exports = ApiController;
