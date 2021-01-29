// This will be our application entry. We'll setup our server here.
import http from 'http';
import Debug from 'debug';

import app from '../app'; // The express app we just created

const debug = Debug('http');
const port = parseInt(process.env.PORT, 10) || 8080;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  debug(`server running on port ${port}`);
});
