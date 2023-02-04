const {MongoClient} = require('mongodb');
const { Collection } = require('mongoose');
const url = 'mongodb://127.0.0.1:/';
const databaseName ='admin'
const client = new MongoClient(url);

async function dbConnect() {
     await client.connect();
  const  db =  client.db(databaseName);
 const collection =  db.collection('phone')
    return collection;
}

module.exports = dbConnect;