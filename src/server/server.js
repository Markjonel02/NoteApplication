import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const corsOptions = {
    origin:"http://localhost:5173",
}

app.use(cors(corsOptions))

const app = express();
const port  = 3000;

/* middlewares */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port,()=>{
    console.log(`this app listen port:${port}`)
})