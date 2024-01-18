import express from "express"
import { UserRoute } from "./routes/user.routes.js"
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// Route

app.use("/api/v1/Shopping",UserRoute)

export {
    app
}