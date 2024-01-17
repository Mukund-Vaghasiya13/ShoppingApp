import express from "express"
import { UserRoute } from "./routes/user.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded())


// Route

app.use("/api/v1/Shopping",UserRoute)

export {
    app
}