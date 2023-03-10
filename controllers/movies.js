const fetch = require("node-fetch");

const getMovies = async (req, res) => {
  try {
    const query = req.params.query;
    const apikey = process.env.API_KEY;
    const url = `${process.env.API_URL}/search/movie?query=${query}&api_key=${apikey}`;
    const response = await fetch(url);
    if (response.errors && response.errors.length > 0) {
      return res.status(404).json(response.errors);
    }
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const apikey = process.env.API_KEY;
    const url = `${process.env.API_URL}/movie/${movieId}?api_key=${apikey}&append_to_response=credits,images`;
    const response = await fetch(url);
    if (response.errors && response.errors.length > 0) {
      return res.status(404).json(response.errors);
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getPopular = async (req, res) => {
  try {
    const apikey = process.env.API_KEY;
    const response = await fetch(
      `${process.env.API_URL}/discover/movie?api_key=${apikey}&sort_by=popularity.desc`
    );
    if (response.errors && response.errors.length > 0) {
      return res.status(404).json(response.errors);
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getPeople = async (req, res) => {
  try {
    const personId = req.params.personId;
    const apikey = process.env.API_KEY;
    const url = `${process.env.API_URL}/person/${personId}?api_key=${apikey}&append_to_response=movie_credits,tv_credits,images`;
    const response = await fetch(url);
    if (response.errors && response.errors.length > 0) {
      return res.status(404).json(response.errors);
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//Some elements of the api, like posters, require this config to work properly
const getApiConfig = async (req, res) => {
  try {
    const apikey = process.env.API_KEY;
    const response = await fetch(
      `${process.env.API_URL}/configuration?api_key=${apikey}`
    );
    if (response.errors && response.errors.length > 0) {
      return res.status(404).json(response.errors);
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getMovies,
  getMovie,
  getPopular,
  getPeople,
  getApiConfig,
};
