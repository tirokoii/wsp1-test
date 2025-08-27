// nano server.js


// let - can change
// const - should always be the same

import express, { json } from "express"

const app = express()

app.get("/", (req, res) => {
    res.write("Wappy life wappy wife \n")
    res.write("Hello beautiful, I will teach you the most important thing in the world... \n")
    res.write("Cookies may taste sweet but they'll eventually rot your teeth, be careful of what you eat \n")
    res.end("Thank you! Mashallah, Namaste, Amitofo, God Bless your heart and live on beautifully")
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

app.get("/about", (req, res) => {
    res.json ({
        "messege": "Hehe"
    })
})

app.get("/secret", (req, res) => {
    res.send("Heh göj")
})

