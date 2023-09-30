const { createMovie, getAllMovies, getMovieById } = require("../Controllers/movie.controller");
const { verifyToken, verifyAdmin } = require("../Middlewares/authJWT");
const { validateCreateMovieRequest } = require("../Middlewares/movie.middlewares");



module.exports = function(app){

    app.post("/mba/api/v1/movies",[verifyToken, verifyAdmin, validateCreateMovieRequest],createMovie);
    app.get("/mba/api/v1/movies",getAllMovies);
    app.get("/mba/api/v1/movies/:id",getMovieById);

}