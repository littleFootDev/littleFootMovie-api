import mongoose from 'mongoose';

export interface IMovie extends mongoose.Document {
    id: string;
    title: string;
    genre: string[];
    overview: string
    original_title: string;
    original_language: string;
    popularity: number;
    relase_date: Date;
    vote_count: number;
    vote_average: number;
    adults: boolean;
    backdrop_path : string;
    poster_path : string;
    video: boolean;

}