require('dotenv').config();

const express = require('express');

console.log('\nmessage', process.env.MSG);
const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

//The port is coming from the environment
const port = process.env.PORT || 4000;

//the port will be set by heroku when we deploy
console.log('port', port)
server.listen(port, () => {
  console.log(`\n Server running on port ${port} \n`);
});
