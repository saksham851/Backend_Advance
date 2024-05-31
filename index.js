const express =require ('express');
require('dotenv').config()

const app=express();
const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>youtube is working nicely</h1>')
})

app.listen(port,()=>{
    console.log(`Example app listening at port ${port}`)
})