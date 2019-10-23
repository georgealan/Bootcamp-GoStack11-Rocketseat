const express = require('express');
const server = express();

server.get('/teste', () => {
  console.log('teste');
})

server.listen(3000);
