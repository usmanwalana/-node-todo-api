/**
 * Created by Usman on 13/07/2017.
 */
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");
module.exports = {mongoose};