import { connectivity } from "./db/DbConnection.js";
import { app } from "./app.js";

app.get("/helper",(req,res)=>{
    res.status(200).send("Live")
})

connectivity().then(()=>{
    const port = process.env.PORT || 3000
    app.listen(port,()=>{
        console.log(`✨ Live on http://localhost:${port}`)
    })
})