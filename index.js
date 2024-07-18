import express from 'express'
import cors from 'cors';
const app = express()
const PORT = process.env.PORT || 4321
app.use(cors())

app.use("/", express.static('dist', {redirect:false}))
app.get("*", (req,res,next)=>{
    res.sendFile(process.cwd() + '/dist/index.html')
})


app.listen(PORT,()=>{
    console.log("Server on port " , PORT);
})