"use strict";
const fs = require("fs");
const path = require("path");

module.exports = {
  async up(queryInterface, Sequelize) {
    const jokesPath = path.join(__dirname, "../data", "jokes.json");
    const rawData = fs.readFileSync(jokesPath, "utf-8");
    const jokes = JSON.parse(rawData);

    const jokesWithTimestamps = jokes.map((joke) => ({
      question: joke.question,
      answer: joke.answer,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("jokes", jokesWithTimestamps, {});
    console.log("✓ Default jokes inserted");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("jokes", null, {});
  },
};
