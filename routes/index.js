import express from "express"
import fs from "fs"

const router = express.Router() 

// Instead of using the server.js file this enables us to create a more understandable work space
// Router is a special funktion from express we can use for this


router.get("/", (req, res) => { //Route
    res.render("index.njk", {
        title: "Our first website",
        message: "With nunjucks we are creating"
    })
})

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "Hello",
        message: "Yay"
    })
})

router.get("/greetings", (req, res) => {
    console.log(req.query)
    res.send(`Hallå ${req.query.name}, ${req.query.messege}`)
})

const {olearysfood} = JSON.parse(fs.readFileSync("./data/olearysfood.json"))

router.get("/olearysfood", (req, res) => { // Man what the flip...
    res.render("olearysfood.njk", { // Responding and sending title and variable olearysfood to url /oleraysfood which the olearysfood.njk is in
        title: "Olearys food",
        olearysfood
    })
})

router.get("/olearysfood/:id", (req, res) => {
    console.log(req.params) // <--- What?
    const food = olearysfood.find(f => f.id === +req.params.id) // <--- What?
    if (food) { // If food is found
        res.render("movie.njk", {
            name: food.name,
            food
        })
    } else {
        res.status(404).json({error: "Food not existing"})
    }
})

export default router