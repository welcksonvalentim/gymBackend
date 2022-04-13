const express = require('express');
require('dotenv').config();

const cors = require('cors');

const rescue = require('express-rescue');
const studentController = require('./controllers/student');
const errorMiddleware = require('./middlewares/error');
const app = express();

const { getStudents } = studentController;

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' )
  app.use(cors());
  next();
})
const PORT = process.env.PORT || 3000;

app.get('/student', rescue(getStudents));

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Executando na porta: ${PORT}`));