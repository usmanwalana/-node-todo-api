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

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed : false
    // }, (error , result)=>
    // {
    //     if(error)
    //     {
    //         return console.log("Unable to insert todo" , error);
    //     }
    //     console.log(JSON.stringify(result.ops , undefined , 2));
    // });


    // db.collection('Users').insertOne(
    //     {
    //     name: 'Muhammad Usman',
    //     age : 22,
    //     location : 'Pakistan'
    // }, (error , result)=>
    // {
    //     if(error)
    //     {
    //         return console.log("Unable to insert user" , error);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined , 2));
    // });

    db.close();
});