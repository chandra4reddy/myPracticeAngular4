/**
 * Created by Reddy on 6/28/2018.
 */
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref:'User'}
});
module.exports = mongoose.model("Message", schema)/**
 * Created by Reddy on 6/28/2018.
 */
