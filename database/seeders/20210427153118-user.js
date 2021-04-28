'use strict';
const heredoc = require('heredoc');

exports.up = function(queryInterface) {
  return queryInterface.sequelize.query(heredoc(function() { /*
INSERT INTO `user` (`id`, `name`, `password`, `avatar`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'test', '123456', 'http://baid.com', 0, '2021-04-27 23:30:02', '2021-04-27 23:30:02', null);
  */ }));
};

exports.down = function(queryInterface) {
  return queryInterface.sequelize.query(heredoc(function() { /*
DELETE FROM `user` WHERE `id` = 1;;
  */ }));
};
