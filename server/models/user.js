/**
 * Created by Usman on 13/07/2017.
 */
let mongoose = require("mongoose");
let User = mongoose.model("User" , {
    email: {
        type: String,
        required: true,
        trim : true,
        minlength: 1,
    }
});
module.exports = {User};