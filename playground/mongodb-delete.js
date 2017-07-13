 // const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (error , db)=>
{
    if(error)
    {
        return console.log("Unable to connect to mongo db Server");
    }
    console.log("Connected to mongo db server");


    db.collection("Todos").deleteMany({text:'Eat lunch'}).then((result)=>
    {
        console.log(result);
    });

    db.collection("Todos").deleteOne({text:'Eat Lunch'}).then((result)=>
    {
        console.log(result);
    });

    db.collection("Todos").findOneAndDelete({text:'Eat Lunch'}).then((result)=>
    {
        console.log(result);
    });

    // db.close();
});