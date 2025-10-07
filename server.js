import indexRouter from "./routes/index.js"

import express from "express";
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
}

app.use(morgan("dev"))
app.use(express.static("public"))

app.use("/", indexRouter)

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

