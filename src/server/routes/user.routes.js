import retrieveUser, { validateRule } from '../controllers/user.controller';
import dataValidation from '../middlewares/requiredData';

const userRoutes = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });

  app.get('/', retrieveUser);
  app.post('/validate-rule', dataValidation, validateRule);
};

export default userRoutes;
