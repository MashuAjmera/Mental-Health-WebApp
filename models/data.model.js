const dataSchema=new Schema({
personalitity,
coins,
streak,
presentAlbum,
presentTrack
});
const Data=mongoose.model('Data',dataSchema);
module.exports=Data;