import mongoose from "mongoose";
import {IMovie} from "../../interface/movie.interface"
import {movieSchema} from "./movie.schema"


const movieModel: mongoose.Model<IMovie> =  mongoose.model<IMovie>('Movie', movieSchema, 'Movie');

export {movieModel as MovieModel}