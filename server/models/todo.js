/**
 * Created by Usman on 13/07/2017.
 */
let mongoose = require("mongoose");
let Todo = mongoose.model("Todo" , {
    text:{
        type: String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});
module.exports = {Todo};