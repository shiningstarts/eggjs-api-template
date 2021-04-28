'use strict';

require('dotenv-safe').config();

// http://docs.sequelizejs.com/manual/installation/usage.html#options
const config = {
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true,
  },
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  query: {
    charset: process.env.DB_CHARSET,
  },
  define: {
    underscored: true,
    freezeTableName: true,
  },
  baseDir: '../app/models',
  timezone: '+08:00',
  operatorsAliases: false,
  pool: {
    min: 10,
    max: 50,
  },
};

// 这里在使用 sequelize-cli 是只识别 NODE_ENV 环境变量
// http://docs.sequelizejs.com/manual/migrations.html#configuration
// 这里对应 EGG_SERVER_ENV
// https://eggjs.org/zh-cn/basics/env.html
module.exports = {
  development: config,
  test: config,
  production: config,
};
