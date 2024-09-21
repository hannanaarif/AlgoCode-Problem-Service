const { SanitizeMarkdown } = require('../utils');

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createproblem(problemData) {
        console.log('Inside problem service');
        
        // Sanitize the problem description
        problemData.description = SanitizeMarkdown(problemData.description);
        console.log("Sanitized Problem Description:", problemData.description);

        // Use the repository to create a new problem
        const problem = await this.problemRepository.createProblem(problemData);
        return problem;
    }

    async getAllProblems(){
           const problems=await this.problemRepository.getAllProblems();
           return problems    
    }

    async getProblem(problemid){
        console.log("form service get problem");
        const problems=await this.problemRepository.getProblem(problemid);
        return problems 
    }

    async deleteProblem(problemid){
        console.log("delete service",problemid);
        const problem=await this.problemRepository.deleteProblem(problemid);
        console.log('problem from serice not found',probelm);
        return problem;
    }

    async updateProblem(problemid,data){
        console.log("data",data);
        const updateproblem=await this.problemRepository.updateProblem(problemid,data);
        return updateproblem;
    }
}
module.exports = ProblemService;
