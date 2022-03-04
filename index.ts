import express from 'express';

const PORT =process.env.PORT || 3000

const app=express()
app.get('/', (request, response)=>{
  response.send('This is message sent from Vincent!');
})

app.listen(PORT, ()=>{
    console.log(`Express is listening in port ${PORT}`)
})