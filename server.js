const express =  require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.json());
// var tasks=[
//     {
//         task:'testing',
//         id:1
//     }
// ];

var tasks=[
    {
        "task":"nav",
        "id":1
    },
    {
        "task":"Rish",
        "id":2
    },
    {
        "task":"riya",
        "id":3
    }

];

app.post('/task',(req, res)=>{
    let body ={
        task:req.body.task,
        id:tasks.length+1
    }
    tasks.push(body);
    res.status(200).send({id:body.id});
    console.log('tasks:',tasks);
})

//get all task

app.get('/task',(req,res)=>{

    res.status(200).send({
        message:"successfully fetched the task list",
        data:tasks
    });
    //console.log('tasks:',tasks);
})

//get  task by id
app.get('/task/:id',(req,res)=>{
    for(var i=0;i<tasks.length;i++){
        if(tasks[i].id==req.params.id){
            return res.status(200).send({
                message:"successfully fetched the task ",
                data:tasks[i]
            });
        }
    }
})

//update

app.put('/task/:id',(req,res)=>{
    const body=req.body;
    for(var i=0;i<tasks.length;i++){
        if(tasks[i].id==body.id){
            tasks[i]={
                task:body.task,
                id:tasks[i].id
               
            }
            break;
        }
    }

            return res.status(200).send({
                message:"successfully update the task ",
                data:tasks[i]
            });  
});


app.delete('/task/',(req,res)=>{
    let body={
        id:tasks.id
    }
    res.status(200).send({
        message:"successfully deleted the task list",
        id:body.id,
        data: tasks
    })
})

app.listen(9000,()=>{
    console.log('server started on port 9000')
})


