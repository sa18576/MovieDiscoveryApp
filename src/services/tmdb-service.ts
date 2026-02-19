import axios from 'axios';
import {
  DEFAULT_LANGUAGE,
  DEFAULT_REGION,
  TMDB_BASE_URL,
  TMDB_IMAGE_BASE_URL,
} from '../constants/api';
import {CastMember, Movie, MovieDetails, PagedResponse, Review} from '../types/movie';
import { env, validateEnv } from '../config/env';

const tmdbClient = axios.create({
  baseURL: TMDB_BASE_URL,
  timeout: 15000,
});

const assertApiKey = () => {
  const validationError = validateEnv();
  if (validationError) {
    throw new Error(validationError);
  }
};

const withAuth = <T extends Record<string, unknown>>(params?: T) => ({
  api_key: env.tmdbApiKey,
  language: DEFAULT_LANGUAGE,
  region: DEFAULT_REGION,
  ...params,
});

export const imageUrl = (path: string | null) =>
  path ? `${TMDB_IMAGE_BASE_URL}${path}` : undefined;

export const fetchPopularMovies = async (page: number) => {
  assertApiKey();
  const response = await tmdbClient.get<PagedResponse<Movie>>('/movie/popular', {
    params: withAuth({page}),
  });
  return response.data;
};

export const searchMovies = async (query: string, page: number) => {
  assertApiKey();
  const response = await tmdbClient.get<PagedResponse<Movie>>('/search/movie', {
    params: withAuth({
      query,
      page,
      include_adult: false,
    }),
  });

  return response.data;
};

export const fetchMovieDetailsBundle = async (
  movieId: number,
  reviewPage: number,
): Promise<{
  details: MovieDetails;
  cast: CastMember[];
  reviews: PagedResponse<Review>;
}> => {
  assertApiKey();
  const [detailsResponse, creditsResponse, reviewsResponse] = await Promise.all([
    tmdbClient.get<MovieDetails>(`/movie/${movieId}`, {
      params: withAuth(),
    }),
    tmdbClient.get<{cast: CastMember[]}>(`/movie/${movieId}/credits`, {
      params: withAuth(),
    }),
    tmdbClient.get<PagedResponse<Review>>(`/movie/${movieId}/reviews`, {
      params: withAuth({page: reviewPage}),
    }),
  ]);

  return {
    details: detailsResponse.data,
    cast: creditsResponse.data.cast,
    reviews: reviewsResponse.data,
  };
};

export const fetchMovieReviews = async (movieId: number, page: number) => {
  assertApiKey();
  const response = await tmdbClient.get<PagedResponse<Review>>(
    `/movie/${movieId}/reviews`,
    {
      params: withAuth({page}),
    },
  );
  return response.data;
};
