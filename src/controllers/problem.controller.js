const {StatusCodes}=require('http-status-codes')
const BadRequest = require('../errors/badrequest.error');
const NotImplemented = require('../errors/notImplemented.error');

function pingpong(req,res){
   return res.json({"message":"ping from problem controll"});
}

function addProblem(req,res,next){
    try{
        throw new NotImplemented('Addproblem');
    }
    catch(error){
        next(error);
    }
}

function getProblem(){
    try{
        throw new BadRequest('Addproblem',{missing:['problem name']});
    }
    catch(error){
        next(error);
    }
}

function getProblems(){
    try{
        throw new BadRequest('Addproblem',{missing:['problem name']});
    }
    catch(error){
        next(error);
    }
}

function deleteProblem(){
    try{
        throw new BadRequest('Addproblem',{missing:['problem name']});
    }
    catch(error){
        next(error);
    } 
}

function updateProblem(){
    try{
        throw new NotImplemented('Addproblem');
    }
    catch(error){
        next(error);
    }
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingpong
}

