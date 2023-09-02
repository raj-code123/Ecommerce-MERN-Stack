const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.error('Failed to connect to MongoDB');
      console.error(err);
    });
};

module.exports = connectDB;
