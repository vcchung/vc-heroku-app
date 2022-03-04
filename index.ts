import express from 'express';

const app=express()
app.get('/', (request, response)=>{
  response.send('This is message sent from Vincent!');
})

app.listen(3000, ()=>{
    console.log("Express is listening in port 3000")
})