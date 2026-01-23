const { DataTypes, Model } = require("sequelize");

class Joke extends Model {}

Joke.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize: require("../config/database"),
    modelName: "Joke",
    tableName: "jokes",
    timestamps: true,
  },
);

module.exports = Joke;
