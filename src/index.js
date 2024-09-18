const express=require('express');
const bodyparser=require('body-parser')
const { ServerConfig } = require('./config');
const apiRoutes=require('./routes');
const errorHandler = require('./utils/errorHandler');
const app=express();
const PORT=ServerConfig.PORT

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());

app.get('/ping',(req,res)=>{
   res.json({"message": "Pinging from home"})
})

app.use('/api',apiRoutes)

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})