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
}
module.exports = ProblemService;
