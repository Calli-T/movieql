import { users, getById, deleteMovie, addMovie, movies } from "./db";

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => getById(id),
    movies: () => movies,
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};
export default resolvers;
