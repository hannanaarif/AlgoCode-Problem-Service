const express=require('express');
const bodyparser=require('body-parser')
const { ServerConfig } = require('./src/config');
const apiRoutes=require('./src/routes');
const app=express();
const PORT=ServerConfig.PORT

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());

app.get('/ping',(req,res)=>{
   res.json({"message": "Pinging from home"})
})

app.use('/api',apiRoutes)

app.listen(PORT,()=>{
    console.log(`Server is ruuning on ${PORT}`);
})