import express from "express"
import { UserRoute } from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import AdminRouter from "./routes/Admin.routes.js"
import { UserAdmin } from "./routes/UserRoute.routes.js"
import cors from "cors"

const app = express()

app.use(cors({
    origin: "https://react-shopping-app-xi.vercel.app",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// Route

app.use("/api/v1/Shopping",UserRoute)
app.use("/api/v1/Shopping/Admin",AdminRouter)
app.use("/api/v1/Shopping/AdminUser",UserAdmin)

export {
    app
}