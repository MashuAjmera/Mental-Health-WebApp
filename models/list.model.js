const listSchema=new Schema({
id,
author,
likes,
date,
text
});
const List=mongoose.model('List',listSchema);
module.exports=List;