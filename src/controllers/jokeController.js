const Joke = require("../models/Joke");

// Create a new joke
exports.createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newJoke = await Joke.create({ question, answer });
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to create joke" });
  }
};

// Get all jokes
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    console.log("Query result:", jokes.length, "jokes");

    res.status(200).json(jokes);
  } catch (error) {
    console.error("Error caught:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ error: "Failed to retrieve jokes" });
  }
};

// Get a joke by ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: "Joke not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve joke" });
  }
};

// Edit a joke by ID
exports.updateJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const [updated] = await Joke.update(
      { question, answer },
      { where: { id: req.params.id } },
    );
    if (updated) {
      const updatedJoke = await Joke.findByPk(req.params.id);
      res.status(200).json(updatedJoke);
    } else {
      res.status(404).json({ error: "Joke not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update joke" });
  }
};

// Get random joke
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomJoke = await Joke.findOne({ offset: randomIndex });
    res.status(200).json(randomJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve random joke" });
  }
};

// Delete a joke by ID
exports.deleteJoke = async (req, res) => {
  try {
    const rowsDeleted = await Joke.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(200).json({ message: "Joke deleted successfully" });
    } else {
      res.status(404).json({ error: "Joke not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete joke" });
  }
};

module.exports = exports;
