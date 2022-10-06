const { MongoClient } = require("mongodb");

const uri = process.env.DB_URL || `mongodb://127.0.0.1:${process.env.DB_PORT}`;
const client = new MongoClient(uri);
const connect = async () => {
  console.log("Trying to connect to database");
  await client.connect();
  await client.db("todo").command({ ping: 1 });
  console.log("Connected to database todo");
};
module.exports.database = client.db("todo").collection("todo");
module.exports.connect = connect;
