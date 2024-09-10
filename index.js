const express=require("express")
const app=express()
const port=2999
const fs=require('fs')
app.get("/hello", (req, res) => {
    fs.readFile("file.txt", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).end("Error reading file");
        }
        const aa = data.toString();
        res.end(aa); 
    });
});
app.get("/bye/:name",(req,res)=>{
    const name=req.params.name
    res.send(`bye ,${name}?`)
})
app.get("/ab?cd",(req,res)=>{
    
    res.send("abcd")
})

app.listen(port,function(){
    console.log("server is running")
})