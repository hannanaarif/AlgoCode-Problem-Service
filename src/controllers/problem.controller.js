const {StatusCodes}=require('http-status-codes')
const BadRequest = require('../errors/badrequest.error');
const NotImplemented =require('../errors/notImplemented.error');

const { ProblemService } = require('../services/index');
const { ProblemRepository } = require('../repositories');

const problemService=new ProblemService(new ProblemRepository())

function pingpong(req,res){
   return res.json({"message":"ping from problem controll"});
}

async function addProblem(req,res,next){
    try{
        console.log('inside addProblem controller')
        const newProblem=await problemService.createproblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:'Successfully Created a new problem',
            error:{},
            data:newProblem
        })
    }
    catch(error){
        next(error);
    }
}

async function getProblem(req,res,next){
    try{
        console.log("form controller get problem");
        const problems=await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched problem",
            error:{},
            data:problems
        });
    }
    catch(error){
        next(error);
    }
}

async function getProblems(req,res,next){
    try{
        console.log("getAllproblem controller")
        const problems=await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Successfully fetched all problems",
            error:{},
            data:problems
        });
   }
    catch(error){
        next(error);
    }
}

function deleteProblem(req,res,next){
    try{
        throw new BadRequest('Addproblem',{missing:['problem name']});
    }
    catch(error){
        next(error);
    } 
}

function updateProblem(req,res,next){
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

