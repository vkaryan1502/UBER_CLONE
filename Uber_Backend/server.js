const http = require('http');
const app = require('./app');
const port = 4000;

const server = http.createServer(app);


server.listen(port, (err) => {
    if (err) {
      console.error(`Error: ${err.message}`);
    } else {
      console.log(`Server is running on port ${port}`);
    }
  });
  