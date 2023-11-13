const {MongoClient, ObjectId} = require('mongodb');
const uri = "mongodb+srv://Admin:Admin12@cluster0.x1bcj5q.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";


async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Connected successfully to server");
        return client;

    }catch (e) {
        
        console.log("Error: " + e);
        process.exit(1);
    }
}
async function getAllListings(client) {
    const collection = await client.db("sample_airbnb").collection("listingsAndReviews");
    let list = collection.find().toArray();
    return list;
}
async function get(client, criteria) {
    const collection = await client.db("sample_airbnb").collection("listingsAndReviews");
    let list = collection.find(criteria).toArray();
    return list;
}
    async function add(client, data) {

        const collection = await client.db("sample_airbnb").collection("listingsAndReviews");       
        collection.insertOne(data);

    }
    async function del(client, partId) {
       let r = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({_id:partId});
       return r;
    }

    function close(client) {
        client.close();
    }

module.exports = {connect, getAllListings, close, get, add, del};