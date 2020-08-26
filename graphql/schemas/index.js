const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { public } = require('./querys/index');

const PublicRootQuery = new GraphQLObjectType({
    name: 'PublicQuery',
    fields:public,
});

module.exports = {
    publicGraph: new GraphQLSchema({
      query: PublicRootQuery
    })
};
  