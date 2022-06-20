import mongoose from "mongoose";


const movieSchema : mongoose.Schema = new mongoose.Schema({
    id: { type: String, required: true},
    title: { type: String, required: true},
    genre: { type: [String], required: true},
    overview: { type: String, required: true, minLength: 10, maxlength: 200},
    original_title: { type: String, required: true},
    original_language: { type: String, required: true},
    popularity: Number,
    relase_date: Date,
    vote_count: Number,
    vote_average: Number,
    adults: Boolean,
    backdrop_path : String,
    poster_path : String,
    video: Boolean,
})


export { movieSchema };