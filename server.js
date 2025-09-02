
import express from "express";
import nunjucks from "nunjucks"

const app = express()

app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Our first website",
        message: "With nunjucks we are creating"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

