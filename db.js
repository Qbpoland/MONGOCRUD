const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://Admin:Admin12@cluster0.x1bcj5q.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";


async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db("admin").command({ping: 1});
        console.log("Connected successfully to server");
        return client.db("admin");

    }catch (e) {
        
        console.log("Error: " + e);
        process.exit(1);
    }
}

module.exports = {connect}