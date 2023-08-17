import mongoose, {Schema} from "mongoose";

const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
    dob:{
        type:String,
        required:true
    },
    
},
{timeStamps:true}

)

const User = mongoose.model("Users", userSchema)
export default User;