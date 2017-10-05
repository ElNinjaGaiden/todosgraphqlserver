'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _todos = [{
    id: 1,
    title: 'Todo 1'
}, {
    id: 2,
    title: 'Todo 2'
}];

var resolvers = exports.resolvers = {
    Query: {
        todos: function todos() {
            return _todos;
        }
    }
};