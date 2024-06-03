// This is the contoller file containing all the functions to access MongoDB data base

const mongoose = require("mongoose");
const car = require("../models/cars");

//Creating a new car
exports.addacar = async (req, res) => {
  try {
    let newCar = await car.create({
      make: req.body.Make,
      model: req.body.Model,
      RegistrationNumber: req.body.RegistrationNumber,
      Owner: req.body.Owner,
      Address: req.body.Address,
      color: req.body.Color,
    });
    if (newCar) {
      res.send(newCar);
    } else {
      res.send("couldnt insert");
    }
  } catch (e) {
    console.log("error in app.post", e);
  }
};

//Reading all cars
exports.getallcars = async (req, res) => {
  try {
    let cars = await car.find();
    res.send(cars);
  } catch (err) {
    err.message = "cannot fetch data";
    res.send(err);
  }
};

//Reading cars older than 5years
exports.viewoldcars = async (req, res) => {
  try {
    let oldcars = await car.find({ model: { $lte: 2019 } });
    if (oldcars) {
      res.send(oldcars);
    } else {
      res.send("no cars found!");
    }
  } catch (e) {
    console.log("error in controller/viewoldcars", e);
  }
};

//Updating one car details
exports.updateonecar = async (req, res) => {
  try {
    let updatedcar = await car.findOneAndUpdate(
      { RegistrationNumber: [req.body.RegistrationNumber] },
      { $set: { [req.body.option]: req.body.value } }
    );
    if (updatedcar) {
      res.send(updatedcar);
    } else {
      res.send("Car not found!");
    }
  } catch (e) {
    console.log("error in controller/updateone ", e);
  }
};

// Updating multiple car details at once
exports.updatefewcars = async (req, res) => {
  try {
    let updatedcar = await car.updateMany(
      { Owner: req.body.Owner },
      { $set: { Address: req.body.Address } }
    );
    if (updatedcar.modifiedCount > 0) {
      res.send(updatedcar);
    } else {
      res.send("Owner not found");
    }
  } catch (e) {
    console.log("Error in controller/updatefewcars");
  }
};

//Deleting a car
exports.deleteacar = async (req, res) => {
  try {
    let deletedcar = await car.deleteOne({
      RegistrationNumber: req.query.RegistrationNumber,
    });
    if (deletedcar) {
      res.send(deletedcar);
    } else {
      res.send("unable to delete car");
    }
  } catch (e) {
    console.log("Error in controller/deleteacar cannot delete car!");
  }
};
