import {Context } from 'koa';
import Joi from '@hapi/joi';
import {IMovie} from '../../interface/movie.interface';
import { MovieModel } from '../../models/movies/movie.model';


export class Movie {
    public async getAllMovies(ctx : Context): Promise<void> {
        try {
            const movies = await MovieModel.find({});
            ctx.body = {message: 'All movies', movies};
        } catch (error) {
            ctx.body = error
        }
    }

    public async createMovie(ctx : Context): Promise<void> {
        try {
            const body: IMovie = ctx.request.body;
            const schema = Joi.object().keys({
                id : Joi.string(),
                title : Joi.string().required(),
                genre : Joi.array(),
                overview : Joi.string().required(),
                original_title : Joi.string().required(),
                original_language : Joi.string().required(),
                popularity : Joi.number().required(),
                relase_date : Joi.date().required(),
                vote_count : Joi.string().required(),
                vote_average : Joi.string().required(),
                adults : Joi.boolean().required(),
                backdrop_path : Joi.string(),
                poster_path : Joi.string(),
                video : Joi.boolean(),
            })
            const value : IMovie = await schema.validateAsync(body);
            const movie = await MovieModel.create(value);
            ctx.body = {message:'Movie adding succesfully', movie};
        } catch (error) {
            ctx.body = error
        }
    }
}