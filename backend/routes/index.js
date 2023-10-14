const express = require("express");

const CarsController = require("../controllers/CarsController");


const routes = express.Router();
const carsRoutes = express.Router();
carsRoutes.get("/cars", CarsController.index);
carsRoutes.post("/create-car", CarsController.create);
carsRoutes.put("/edit-car/:chassi", CarsController.edit);
carsRoutes.delete("/delete-car/:chassi", CarsController.delete);




routes.use("/api/v1", [
    carsRoutes
]);

module.exports = routes;