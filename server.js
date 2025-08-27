// nano server.js


// let - can change
// const - should always be the same

import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello world")
    res.send("Wappy life wappy wife")
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})

