const mongoose=require('mongoose');

const timelineSchema=mongoose.Schema({
  
    _id:{type:mongoose.Schema.Types.ObjectId},
    email:{type:String},
    userId:{type:String,required:true},
    projectName:{type:String, required:true},
    author:{type: String,required:true},
    cost:{type: Number,default:0},
    tags:{type: String},
    description:{type:String,required:true},
    projectSubject:{type:String,required:true},
    date:{type:String,required:true},
    duration:{type:String,required:true},
    projectLink:{type:String},
    levelOfDifficulty:{type:String,required:true},
    projectType:{type:String,required:true},
    skillsRequired:{type:String,required:true},

});

module.exports=mongoose.model('timeline',timelineSchema);


// "cost": 50000,
// "email": "sounak07@gmail.com",
// "projectName": "Nodejs Project with Mongo Db",
// "tags": "Nodejs Mongo FreeLancer Angular7",
// "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
// "projectSubject": "This is nodejs project using MongoDB",
// "duration": "8 months",
// "projectType": "One Time Project",
// "skillsRequired": "Nodejs Mongo Freelancer Angular7",
// "projectLink": "http://www.uniprojex.com",
// "levelOfDifficulty": "Easy",