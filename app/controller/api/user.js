'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async show() {
    const { ctx } = this;

    const params = ctx.params;

    ctx.validate({
      id: 'id',
    }, params);

    ctx.body = await ctx.service.user.getUser(params.id);
  }
}

module.exports = UserController;
