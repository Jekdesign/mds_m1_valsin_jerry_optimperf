const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();



//Middleware
//app.use(express.urlencoded({ extended: true}));
//app.use(express.json());
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//Controllers
const UserControl = require('./controllers/UserControl')

//Routes
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);

//Start server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
  }
    )
  .then(result => {
    app.listen(process.env.PORT);
  })
  .catch(err => console.log(err));