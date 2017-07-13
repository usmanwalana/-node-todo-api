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
    // db.collection("Todos").find().toArray().then((docs)=>
    // {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs , undefined , 2));
    //
    // }, (error)=>
    // {
    //     console.log("Unable to fetch todos" , error);
    // });

    // db.collection("Todos").find({completed: false}).toArray().then((docs)=>
    // {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs , undefined , 2));
    //
    // }, (error)=>
    // {
    //     console.log("Unable to fetch todos" , error);
    // });

    db.collection("Todos").find().count().then((count)=>
    {
        console.log("Todos count" , count);

    }, (error)=>
    {
        console.log("Unable to fetch todos" , error);
    });

    // db.close();
});