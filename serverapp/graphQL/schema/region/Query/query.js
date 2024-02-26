const graphql = require("graphql");
const { RegionType } = require("../Types/Types");
const RegionResolvers = require("../../../resolvers/region/region");

const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = graphql;

const RootQuery = new GraphQLObjectType({
  name: "ViewTypeOfQueries",
  fields: {
    Regions: {
      type: new GraphQLList(new GraphQLNonNull(RegionType)),
      resolve: RegionResolvers.findRegions,
    },
  },
});

module.exports = RootQuery;