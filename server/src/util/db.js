const mongoose = require('mongoose');
const Question = require('../models/Question');
let data = require('./data.json');

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database connected.');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

module.exports.createMCQ = async () => {
  try {
    const count = await Question.find().estimatedDocumentCount();
    if (count !== 0) return;
    await Question.insertMany(data);
    console.log('Questions inserted in the database successfully');
  } catch (error) {
    console.log(error);
    return;
  }
};

module.exports.close = async () => {
  try {
    await mongoose.connection.close();

    console.log('Connection closed.');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
