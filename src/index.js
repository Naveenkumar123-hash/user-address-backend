require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use('/api', userRoutes);

const mongoUri = process.env.MONGODB_URI;
const port=process.env.PORT


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
