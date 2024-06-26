const express = require("express")
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB()

// CORS middleware
app.use((req, res, next) => {
  const origin = req.get("origin")
  res.setHeader("Access-Control-Allow-Origin", origin)
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.use(express.json())
app.use("/api", require("./Routes/CreateUser"))
app.use("/api", require("./Routes/DisplayData"))
app.use("/api", require("./Routes/OrderData"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
