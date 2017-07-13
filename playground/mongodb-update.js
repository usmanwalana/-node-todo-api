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


    db.collection("Todos").findOneAndUpdate({
            _id:new ObjectID("jhjhkhkh876868")
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>
    {

    });


    // db.close();
});