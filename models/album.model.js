const albumSchema=new Schema({
id,
name,
theme,
magazine,
tracks
});
const Album=mongoose.model('Album',albumSchema);
module.exports=Album;