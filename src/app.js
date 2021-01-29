import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import userRoutes from './server/routes/user.routes';

// Set up the express app
const app = express();

// Log requests to the console
app.use(logger('dev'));

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
userRoutes(app);

// // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to Rule validation" application',
// }));

export default app;
