const mongoose = require('mongoose');

module.exports = function(){
  const nineteenFiftyFiveSchema = mongoose.Schema({
    name:{
      type: String,
      required: true,
      unique: [true, 'names must be unique']
    }
  },{timeStamp:true});
  return nineteenFiftyFiveSchema;
}
