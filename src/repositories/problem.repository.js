const NotFound = require('../errors/notfound.error.js');
const BadRequest=require('../errors/badrequest.error.js');
const {Problem}=require('../models');

class ProblemRepository{

async createProblem(problemData){
    try {
        const problem=await Problem.create({
            title:problemData.title,
            description:problemData.description,
            codeStubs:problemData.codeStubs,
            testcases:(problemData.testcases)?problemData.testcases:[],
        });
        return problem; 
        }
    catch (error) {
            throw error;
        }
    }

    async getAllProblems(){
          const problems=await Problem.find({});
          return problems; 
    }

    async getProblem(id){
        try {
        console.log("from repository get problem",id);
        const problem=await Problem.findById(id);
        if(!problem){
            throw new NotFound("problem",id);
        }
        console.log(problem);
        return problem;

        } catch (error) {
            throw error;
        }
        
    }

    async deleteProblem(problemid) {
    
        const problem=await Problem.findByIdAndDelete(problemid);

        if(!problem){
            throw new NotFound("problem",problemid);
        }
        console.log(problem);
        return problem;
    }

    async updateProblem(problemid,updateData){

        const updateproblem=await Problem.findByIdAndUpdate(problemid,updateData,{new:true});
        // Check if the problem was found
        if (!updateproblem) {
            throw new NotFound('Problem', problemid);
        }
        console.log(updateproblem);
        // Return the updated problem
        return updateproblem;
    }

};
module.exports=ProblemRepository;