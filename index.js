const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=4000;

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
	res.send("hi i am server")
})

app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const{name,password,number,course,gender}=req.body
	console.log(name,password,number,course,gender,"values")
	res.send("Data Added Successfull")
})

app.listen(port,()=>console.log("server is started"))