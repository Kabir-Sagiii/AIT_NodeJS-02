const { MongoClient } = require("mongodb");
const mongoclient = new MongoClient("mongodb://localhost:27017");

async function connection(collectionName) {
  //connect with mongodb server
  await mongoclient.connect();

  //connect with database
  const db = mongoclient.db("aitdbaggregation");

  //connect with collection
  const collection = db.collection(collectionName);

  //return collection from here
  return collection;
}

module.exports = connection;
