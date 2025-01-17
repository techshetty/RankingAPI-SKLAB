const express = require("express")
const app=express()
app.use(express.json())
const port=8080
const {loadStudents,getSortedST,searchStudent,getList,addStudent}=require('./controllers/rescontroller');
loadStudents();
app.get('/',(req,res)=>{
    res.send("ResAPI is running....")
})
app.get('/students',(req,res)=>{
    const sort=req.query.sort
    if(sort && sort=='yes'){
    const st=getSortedST();
    return res.status(200).json(st);
    }
    const data=getList();
    return res.status(200).json(data);
    
})
app.get('/students/:id',(req,res)=>{
    const id=req.params.id;
    const st=searchStudent(id);
    console.log(searchStudent(id),id)
    if(st)return res.status(200).json(st);
    return res.status(404).json("No Student found")
})
app.post('/students/',(req,res)=>{
    const {id,name,score}=req.body
    const st=searchStudent(id);
    if(st) return res.status(500).json("Duplicate ID found")
    addStudent({id,name,score});
    return res.status(200).json("New Student added successfully and BST updated");
})
app.listen(port,()=>{
    console.log(`Server is runnig on prot ${port}`)
})