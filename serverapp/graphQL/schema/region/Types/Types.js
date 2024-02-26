const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

const RegionType = new GraphQLObjectType({
  name: "RegionType",
  fields: () => ({
    ID: { type: GraphQLID },
    strName: { type: GraphQLString },
    PID: { type: GraphQLInt },
  }),
});


module.exports = {RegionType};