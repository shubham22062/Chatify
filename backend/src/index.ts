import express from 'express'

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("This is the backend page of chatify")
});

app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})