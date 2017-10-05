'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _graphqlServerExpress = require('graphql-server-express');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _postgraphql = require('postgraphql');

var _postgraphql2 = _interopRequireDefault(_postgraphql);

var _config = require('./src/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const PORT = 4000;
var PORT = process.env.PORT || '3000';
//app.set('port', port);

var server = (0, _express2.default)();

server.use('*', (0, _cors2.default)({ origin: _config.clientUri }));
server.use((0, _postgraphql2.default)(_config.databaseConnectionString));

// server.use('/graphql', bodyParser.json(), graphqlExpress({
//     schema
// }));

server.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({
    endpointURL: '/graphql'
}));

server.listen(PORT, function () {
    return console.log('GraphQL Server is now running on http://localhost:' + PORT);
});