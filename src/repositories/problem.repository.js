const {Problem}=require('../models');

class ProblemRepository{

async createProblem(problemData){
    try {
        console.log('inside addProblem Repo')
        const problem=await Problem.create({
            title:problemData.title,
            description:problemData.description,
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
};

module.exports=ProblemRepository;