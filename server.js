
import express from "express";
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
}

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/index", (req, res) => { //Route
    res.render("index.njk", {
        title: "Our first website",
        message: "With nunjucks we are creating"
    })
})

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Hello",
        message: "Yay"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

app.get("/greetings", (req, res) => {
    console.log(req.query)
    res.send(`Hallå ${req.query.name}, ${req.query.messege}`)
})

