/* eslint valid-jsdoc: "off" */

'use strict';

require('dotenv-safe').config();
const dbConfig = require('./sequelize');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const env = process.env;

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.cluster = {
    listen: {
      host: env.HOST,
      port: +env.PORT,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619256069361_4619';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    appName: env.APP_NAME,
    sequelize: dbConfig[env.NODE_ENV],
  };

  return {
    ...config,
    ...userConfig,
  };
};
