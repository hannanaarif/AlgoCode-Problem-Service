const express=require('express');
const { problemController } = require('../../controllers');

const problemRouter=express.Router();


problemRouter.use('/ping',problemController.pingpong)
problemRouter.use('/',problemController.addProblem);
problemRouter.use('/id',problemController.getProblem);
problemRouter.use('/',problemController.getProblems);
problemRouter.use('/id',problemController.deleteProblem);
problemRouter.use('/id',problemController.updateProblem);


module.exports=problemRouter;