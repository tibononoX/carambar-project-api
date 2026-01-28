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
 *         question: Que dit un citron cambrioleur ?
 *         answer: Plus un zeste !
 */

// Create a new joke
router.post("/", jokeController.createJoke);

// Get all jokes
router.get("/", jokeController.getAllJokes);

// Get a random joke
router.get("/random", jokeController.getRandomJoke);

// Get a joke by ID
router.get("/:id", jokeController.getJokeById);

//Edit a joke by ID
router.put("/:id", jokeController.updateJoke);

// Delete a joke by ID
router.delete("/:id", jokeController.deleteJoke);

module.exports = router;
