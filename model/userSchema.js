const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
      username:{
            type:String,
            required:true,
            unique:true,
            min:4,
            max:50
      },
      email:{
            type:String,
            required:true,
            uniqure:true,
            max:30
      },password:{
            type:String,
            required:true,
            min:8,

      },isAvatarImageSet:{
            type:Boolean,
            default:false,

      },avatarImage:{
            type:String,
            default:""


      }
});

module.exports=mongoose.model("Users",userSchema);