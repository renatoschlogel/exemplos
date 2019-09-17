const express = require('express');
const { User } = require('./app/models');

const app = express();

User.create({ name: 'Renato', email: 'renato.s@outlook.com', password: '123456' });

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
