const express = require("express");
const router = express.Router();
const {
  getMovies,
  getMovie,
  getPopular,
  getApiConfig,
  getPeople,
} = require("../controllers/movies");

router.get("/api/movies/:query", getMovies);

router.get("/api/movie/:movieId", getMovie);

router.get("/api/person/:personId", getPeople);

router.get("/api/discover/movie", getPopular);

router.get("/api/config", getApiConfig);

router.get("/api/test", (req, res) => {
  res.json({ message: "All good" });
});

module.exports = router;
