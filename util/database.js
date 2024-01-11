const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://clementcla7:<password>@cluster0.9bsugxp.mongodb.net/?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      callback(client);
    })
    .catch(err => {

      console.log(err);
    });
};

module.exports = mongoConnect;
