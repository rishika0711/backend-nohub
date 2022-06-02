const express= require('express');
const bodyParser = require('body-parser');

const app =express();

const printMiddleware = (req, res, next)=>{
    console.log('I am middleware');
    next();

}

app.use(bodyParser.json());
app.use(printMiddleware)

app.get('/record',(req, res)=>{
    console.log("query params",req.query.limit,req.query.search);
    res.send('here is get method');
})
app.post('/record', (req, res)=>{
    console.log(req.body);
    res.send("Here are your records POST Method");
  })

app.listen(9000,()=>{
    console.log('server statered')

});