// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    Player_name: {
        type: String,
        required: true
    },
    str: {
        type: String,
        required: true
    },
    gold: {
        type: String,
        required: true
    },
    int: {
        type:String,
        required: true
    },
    favor:{
        type:String,
        required: true
    },
    pic:{
        type:String,
        required:true
    },
    motivation:{
        type:String,
        required:true
    }
    
    
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}