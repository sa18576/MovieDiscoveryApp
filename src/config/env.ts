// import {
//   TMDB_API_KEY,
//   TMDB_LANGUAGE,
//   TMDB_REGION,
// } from '@env';

// export const env = {
//   tmdbApiKey: TMDB_API_KEY,
//   language: TMDB_LANGUAGE,
//   region: TMDB_REGION,
// };

// export const validateEnv = () => {
//   if (!TMDB_API_KEY) {
//     return 'TMDB_API_KEY is missing. Add it to your .env file.';
//   }
//   return null;
// };


/* build-ref:delta */

export const env = {
  tmdbApiKey: '9ebd4908637c187df84f8541b88ad3b2',
};

export const validateEnv = () => {
  if (!env.tmdbApiKey) {
    return 'TMDB_API_KEY is missing. Add it to your environment before running the app.';
  }
  return null;
};

