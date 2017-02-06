const home = require('./handlers/home.js');

module.exports = [
   { method: 'GET', path: '/', handler: home },
   { method: 'GET', path: '/{file*}', handler: { directory: { path: 'public/' } } },
];
