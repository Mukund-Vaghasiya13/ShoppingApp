import express from "express"
import { UserRoute } from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import AdminRouter from "./routes/Admin.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// Route

app.use("/api/v1/Shopping",UserRoute)
app.use("/api/v1/Shopping/Admin",AdminRouter)

export {
    app
}