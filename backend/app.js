const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const vehicleRoutes = require('./routes/vehicleRoutes')
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.options('', cors())

mongoose.connect(process.env.DATABASE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
  })
  .then(() => {
    app.listen(5000);
    console.log('DB Connected');
  })
  .catch(err => console.log("Not connected to DB"));

app.use(express.urlencoded({ extended: true }));

app.use("/api", vehicleRoutes);
// app.listen(3000);