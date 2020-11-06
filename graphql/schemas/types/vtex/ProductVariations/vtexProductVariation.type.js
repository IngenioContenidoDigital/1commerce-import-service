const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = require('graphql');

let VtexProductVariationType = new GraphQLObjectType({
  name: 'VtexProductVariationType',
  fields: () => ({
    price:{ type:GraphQLInt, resolve:(obj, args, context, info)=>{
      return obj.listPrice !== 0 ? (obj.listPrice / 100) : (obj.bestPrice / 100);
    }},
    talla:{ type:GraphQLString, resolve:(obj, args, context, info)=>{
      return obj.dimensions.Talla && obj.dimensions.Talla !== '' ? obj.dimensions.Talla : 'único';
    }},
    quantity:{ type:GraphQLInt, resolve:(obj, args, context, info)=>{
      return obj.availablequantity || 0;
    }},
    reference:{ type:GraphQLString, resolve:(obj, args, context, info)=>{
      return obj.skuname ? obj.skuname : '';
    }}
  }),
});

module.exports = VtexProductVariationType;
