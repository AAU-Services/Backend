import express, { Router } from "express";
import * as buildingController from "../controllers/buildingController";

const buildingRouter: Router = express.Router();

buildingRouter
  .route("/")
  .post(buildingController.createBuilding)
  .get(buildingController.getBuildings);

buildingRouter
  .route("/:id")
  .get(buildingController.getBuilding)
  .patch(buildingController.updateBuilding)
  .delete(buildingController.deleteBuilding);

export default buildingRouter;
