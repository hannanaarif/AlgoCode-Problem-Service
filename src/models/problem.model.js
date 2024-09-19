const mongoose=require('mongoose');


const problemSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title cannot be empty']
    },
    description:{
        type:String,
        required:[true,'Description cannot be empty']
    },
    difficulty:{
        type:String,
        enum:['easy','Medium','Hard'],
        required:[true, 'difficulty cannot be empty'],
        default:'easy'
    },
    testcases:[
            {
                input:{
                    type:String,
                    required:true
                },
                output:{ 
                    type:String,
                    required:true
                }

            }
           
        ],
    editorial:{
        type:String,
    }
    
});

const problem=mongoose.model('problem',problemSchema);

module.exports=problem;