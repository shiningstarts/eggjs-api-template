'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  /**
   * Get user detail.
   *
   * @param {number} userId
   * @return
   */
  async getUser(userId) {
    const ctx = this.ctx;
    const { User } = ctx.model;

    const userRow = await User.findByPk(userId);
    if (!userRow) {
      ctx.throw('user not found', 404);
    }

    return userRow;
  }
}

module.exports = UserService;
