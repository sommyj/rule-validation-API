const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _user = _interopRequireWildcard(require('../controllers/user.controller'));

const _requiredData = _interopRequireDefault(require('../middlewares/requiredData'));

const userRoutes = function userRoutes(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });
  app.get('/', _user.default);
  app.post('/validate-rule', _requiredData.default, _user.validateRule);
};

const _default = userRoutes;
exports.default = _default;
