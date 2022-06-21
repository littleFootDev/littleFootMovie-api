import Router from 'koa-router';
import {Movie} from "./controllers/movie/movie";

export function registerRoutes () {
    const router = new Router();

    // Movie Route 
    router.get('/movies', Movie.prototype.getAllMovies);
    router.post('/movies/create', Movie.prototype.createMovie);


    return router;
}