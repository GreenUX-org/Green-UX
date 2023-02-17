const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "info",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull:true,
      },
      show: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};
