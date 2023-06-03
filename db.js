const mongoose = require("mongoose");
let url = "mongodb://localhost:27017";

const connectToMongo = () => {
  mongoose.connect(url);
  console.log("Connected to mongoose sucessfully.");
};

module.exports = connectToMongo;
// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));
