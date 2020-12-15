const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
  } = require('graphql');
  
  const PrestashopProductsTyPe = new GraphQLObjectType({  
    name: "PrestashopProductsTyPe",
    fields: () => ({
      productId: { type: new GraphQLNonNull(GraphQLID) },
      key: { type: new GraphQLNonNull(GraphQLString) },
      channel: { type: new GraphQLNonNull(GraphQLString) }
    })
  })
  
  module.exports = { PrestashopProductsTyPe };