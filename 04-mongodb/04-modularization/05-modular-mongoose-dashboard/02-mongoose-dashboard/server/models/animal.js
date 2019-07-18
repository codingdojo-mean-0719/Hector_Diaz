

module.exports =function(mongoose){
  const MuntjacSchema = new mongoose.Schema({
  name:String,
  tuskSize:String
})
return MuntjacSchema
}
