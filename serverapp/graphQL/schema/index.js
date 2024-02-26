const graphql = require("graphql");
const RootQuery = require("./region/Query/query");
const Mutation = require("./region/Mutation/mutation");

const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});