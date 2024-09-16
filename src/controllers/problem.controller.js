const {StatusCodes}=require('http-status-codes')
const BadRequest = require('../errors/badrequest.error');

function pingpong(req,res){
   return res.json({"message":"ping from problem controll"});
}

function addProblem(req,res,next){
    try{
        throw new BadRequest('Addproblem',{missing:['problem name']});
    }
    catch(error){
        next(error);
    }
}

function getProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
     });
}

function getProblems(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
    });
}

function deleteProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
     }); 
}

function updateProblem(){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message:"Not Implemented"
     });
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingpong
}

