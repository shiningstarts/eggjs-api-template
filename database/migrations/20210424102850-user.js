'use strict';
const heredoc = require('heredoc');

exports.up = function(queryInterface) {
  return queryInterface.sequelize.query(heredoc(function() { /*
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(255) NOT NULL COMMENT '名称',
  `password` varchar(128) NOT NULL COMMENT '密码',
  `avatar` varchar(255) NOT NULL COMMENT '头像',
  `gender` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '性别：0-未知、1-男、2-女、3其它',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted_at` datetime NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';
  */ }));
};

exports.down = function(queryInterface) {
  return queryInterface.sequelize.query(heredoc(function() { /*
DROP TABLE IF EXISTS `user`
  */ }));
};
