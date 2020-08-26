const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLInputObjectType
} = require('graphql');

const PaginationInput  = require('./paginationInput');
const ListingInput = new GraphQLInputObjectType({
    name: 'ListingInput',
    fields: () => ({
      pagination: { type: PaginationInput }
    }),
});

module.exports = ListingInput;