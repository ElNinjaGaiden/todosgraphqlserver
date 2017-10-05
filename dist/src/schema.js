'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = undefined;

var _graphqlTools = require('graphql-tools');

var _resolvers = require('./resolvers');

var typeDefs = '\ntype Todo {\n    id: ID!\n    title: String\n    description: String\n    dueDate: String\n    priority: String\n  }\n  \n  type Query {\n    todos: [Todo]\n  }\n';

var schema = (0, _graphqlTools.makeExecutableSchema)({ typeDefs: typeDefs, resolvers: _resolvers.resolvers });
exports.schema = schema;