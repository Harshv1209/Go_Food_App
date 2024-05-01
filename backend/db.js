const mongoose = require("mongoose")

const mongoURI =
  "mongodb+srv://harshvaidya345:Harsh%40123@cluster0.cgpg4xy.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0"

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("Connected Successfully")
    const fetched_data = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray()
    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray()

    // Assign fetched data to global variables
    global.food_items = fetched_data
    global.foodCategory = foodCategory
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

module.exports = mongoDB
