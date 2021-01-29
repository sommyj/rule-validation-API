const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _http = _interopRequireDefault(require('http'));

const _debug = _interopRequireDefault(require('debug'));

const _app = _interopRequireDefault(require('../app'));

// This will be our application entry. We'll setup our server here.
// The express app we just created
const debug = (0, _debug.default)('http');
const port = parseInt(process.env.PORT, 10) || 8080;

_app.default.set('port', port);

const server = _http.default.createServer(_app.default);

server.listen(port, () => {
  debug('server running on port '.concat(port));
});
