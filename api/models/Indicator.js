const {Model, DataTypes} = require("sequelize");
const conn = require("../lib/sequelize");

class Indicator extends Model {}
Indicator.init(
  {
    commune: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score_dep: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    score_com: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    score_reg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: conn,
    modelName: "Indicator",
    freezeTableName: true,
  }
);

module.exports = Indicator;
