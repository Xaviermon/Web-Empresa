require("dotenv").config();
const server = require('./src/app');
const { PORT } = process.env;

server.listen(`${PORT}`, () => {
    console.log(`listenig to ${PORT}`);
  });