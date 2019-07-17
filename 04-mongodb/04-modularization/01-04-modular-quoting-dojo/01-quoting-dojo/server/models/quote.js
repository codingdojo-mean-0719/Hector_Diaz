

module.exports = function(mongoose){

const QouteSchema = new mongoose.Schema({
  qoute:String,
  author:String,
},{timestamps:{createdAt:' enterd'}})
  return QouteSchema;
}
