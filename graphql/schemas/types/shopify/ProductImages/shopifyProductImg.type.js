const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

const ShopifyImageType = require('./shopifyImage.type');
let ShopifyProductImgType = new GraphQLObjectType({
  name: 'ShopifyProductImgType',
  fields: () => ({
    externalId: { type: GraphQLString, resolve:(obj, args, context, info)=>{
      return obj.id;
    }},
    images:{ type: new GraphQLList(ShopifyImageType), resolve:(obj, args, context, info)=>{      
      return obj.images
    }},
  }),
});

module.exports = ShopifyProductImgType;
