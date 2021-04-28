'use strict';

module.exports = app => {
  const { DataTypes } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: 'ID',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '名称',
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: '密码',
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '头像',
    },
    gender: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: '性别：0-未知、1-男、2-女、3其它',
    },
  }, {
    sequelize: app.Sequelize,
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' },
        ],
      },
    ],
  });

  return User;
};
