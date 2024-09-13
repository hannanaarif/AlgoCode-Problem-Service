const express=require('express');
const problemRouter=require('./probelm.routes')

const v1Router=express.Router();

v1Router.use('/problems',problemRouter);

v1Router.get('/ping', (req, res) => {
    res.json({ message: 'Pong from v1' });
});


module.exports=v1Router;