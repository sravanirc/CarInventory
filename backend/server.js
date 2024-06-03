//This is the server page for Car inventory
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const car = require("./models/cars");
const con = require("./controllers/controller");
const app = express();

//connecting to MongoDB atlas
mongoose.connect(
  "mongodb+srv://sravanirc:sravani12345@cluster0.n5qssnu.mongodb.net/Cars"
);

//intialising cors
app.use(cors());
app.use(express.json());

//routes
app.get("/getallcars", con.getallcars);

app.get("/viewoldcars", con.viewoldcars);

app.put("/updateonecar", con.updateonecar);

app.put("/updatefewcars", con.updatefewcars);

app.post("/addacar", con.addacar);

app.delete("/deleteacar", con.deleteacar);

//stating server
app.listen(5000, () => {
  console.log("server is running");
});
