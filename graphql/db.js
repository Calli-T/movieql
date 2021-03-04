export const users = [
  {
    id: "1",
    name: "Ultra Sword Dark knight",
    level: 243,
    job: "bishop",
  },
  {
    id: "2",
    name: "Dynast's Descendant",
    level: 252,
    job: "Angelic Buster",
  },
  {
    id: "3",
    name: "Guy Spelunky",
    level: 221,
    job: "Hoyoung",
  },
];

export let movies = [
  {
    id: 0,
    name: "Avengers: Infinity War",
    score: "68",
  },
  {
    id: 1,
    name: "Parasite",
    score: "96",
  },
  {
    id: 2,
    name: "The Hobbit, The battle of the five armie",
    score: "59",
  },
];

export const getById = (id) => {
  const filteredUsers = users.filter((user) => +user.id === id);
  return filteredUsers[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => +movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
