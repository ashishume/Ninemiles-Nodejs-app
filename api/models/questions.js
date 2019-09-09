const mongoose=require('mongoose');

const questionsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    questionTitle:{type:String, required:true},
    options:[{option:{type:String,required:true},optionStatus:{type:String,required:true}}],
    questionType:{type:String,required:true},
    createdAt: { type: Date, default: Date.now },
    author:{type:String,required:true},
    section:{type:Number,required:true},
    questionUserType:{type:String,required:true},
    testNumber:{type:Number,required:true},
    optionsList:[{type:String}],
    sectionCategory:{type:String,required:true},
    questionNumber:{type:Number,required:true},
    status:{type:Number,default:1}
});

module.exports=mongoose.model('question',questionsSchema);


