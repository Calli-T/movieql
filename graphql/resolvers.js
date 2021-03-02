const USDK = {
  name: "Ultra Sword Dark knight",
  level: 243,
  job: "bishop",
};

const resolvers = {
  Query: {
    user: () => USDK,
  },
};
export default resolvers;
