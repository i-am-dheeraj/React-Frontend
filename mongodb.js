import {MongoClient} from 'mongodb';
const {MongoClient} = require('mongodb');
const url = "mongodb+srv://viddeveloper110:1234567890@vidhema-dev.n5rtjjg.mongodb.net/";
const databaseName = 'React_Crud';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('Blog');
}
module.exports = dbConnect;