import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Structure = mongoose.Schema({
    username: String,
    email: String,
    password: String,
     
})

Structure.plugin(passportLocalMongoose); 



const UserCollection =  mongoose.model("User", Structure)

export default UserCollection;