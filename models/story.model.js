const storySchema=new Schema({
author,
time,
text,
background,
video,
photo});
const Story=mongoose.model('Story',storySchema);
module.exports=Story;