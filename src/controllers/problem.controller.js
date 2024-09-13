function pingpong(req,res){
   return res.json({"message":"ping from problem controll"});
}

function addProblem(req,res){
     return res.status(501).json({
        message:"Not Implemented"
     })
}

function getProblem(){
    return res.status(501).json({
        message:"Not Implemented"
     })
}

function getProblems(){
    return res.status(501).json({
        message:"Not Implemented"
     })
}

function deleteProblem(){
    return res.status(501).json({
        message:"Not Implemented"
     }) 
}

function updateProblem(){


}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingpong
}

