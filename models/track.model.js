const trackSchema=new Schema({
album,
name,
type,
author,
text
});
const Track=mongoose.model('Track',trackSchema);
module.exports=Track;