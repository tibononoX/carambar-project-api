const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Joke:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the joke
 *         question:
 *           type: string
 *           description: The joke question
 *         answer:
 *           type: string
 *           description: The joke answer
 *       required:
 *         - question
 *         - answer
 *       example:
 *         id: 1
 *         question: Why did the chicken cross the road?
 *         answer: To get to the other side!
 */

// Create a new joke
router.post("/", jokeController.createJoke);

// Get all jokes
router.get("/", jokeController.getAllJokes);

// Get a random joke
router.get("/random", jokeController.getRandomJoke);

// Get a joke by ID
router.get("/:id", jokeController.getJokeById);

// Delete a joke by ID
router.delete("/:id", jokeController.deleteJoke);

module.exports = router;
