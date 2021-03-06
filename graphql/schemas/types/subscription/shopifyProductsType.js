const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const ShopifyProductsTyPe = new GraphQLObjectType({  
  name: "ShopifyProductsTyPe",
  fields: () => ({
    productId: { type: new GraphQLNonNull(GraphQLID) },
    key: { type: new GraphQLNonNull(GraphQLString) },
    channel: { type: new GraphQLNonNull(GraphQLString) }
  })
})

module.exports = { ShopifyProductsTyPe };
