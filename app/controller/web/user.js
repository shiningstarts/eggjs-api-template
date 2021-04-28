'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async show() {
    const { ctx } = this;

    const params = ctx.params;

    ctx.validate({
      id: 'id',
    }, params);

    const user = await ctx.service.user.getUser(params.id);

    ctx.body = `Hello ${user.name}!`;
  }
}

module.exports = UserController;
