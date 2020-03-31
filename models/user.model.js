const userSchema=new Schema({
username,
dob,
country,
phone,
email,
name
});
const User=mongoose.model('User',userSchema);
module.exports=User;