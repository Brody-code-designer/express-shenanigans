const express = require("express")
const morgan = require("morgan")

//initializing express
const app = express()

app.use(morgan('dev'))
app.use(express.json())

const indexRoute = express.Router()

const indexHandler1 = (request, response, next) => {
    console.log("I happened First")
    next()
}

const indexHandler2 = (request, response) => {
    console.log("I happened second")
    return response.json({status: 200, data:"is this thing on"})
}

indexRoute.route("/").get(indexHandler1, indexHandler2)

app.use("/apis", indexRoute)


app.listen(4200, () => {
    console.log("Its alive!!!!")
})
