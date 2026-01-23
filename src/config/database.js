const { Sequelize } = require("sequelize");
const path = require("path");
require("dotenv").config();

const dbPath = path.join(__dirname, "../../", process.env.DB_NAME);
console.log(`Database file path: ${dbPath}`);
console.log(`DB_NAME from .env: ${process.env.DB_NAME}`);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: true,
});

console.log(
  `Database file path: ${path.join(__dirname, "../../", process.env.DB_NAME)}`,
);

module.exports = sequelize;
