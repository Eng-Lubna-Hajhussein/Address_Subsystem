const graphql = require("graphql");
const  {RegionType}  = require("../Types/Types");
const RegionResolvers = require("../../../resolvers/region/region");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addRegion: {
      type: RegionType,
      args: {
        strName: { type: GraphQLString },
        PID: { type: GraphQLInt },
      },
      resolve: RegionResolvers.createRegion,
    },
    updateRegion: {
      type: RegionType,
      args: {
        ID: { type: GraphQLID },
        strName: { type: GraphQLString },
      },
      resolve: RegionResolvers.updateRegion,
    },
  },
});

module.exports = Mutation;
