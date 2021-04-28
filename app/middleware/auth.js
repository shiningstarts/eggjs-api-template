'use strict';

module.exports = () => {
  return async function auth(ctx, next) {

    console.log('auth middleware');

    await next();
  };
};
