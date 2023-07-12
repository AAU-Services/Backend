import * as campusController from "../controllers/campusController";
import express, { Router } from "express";

const campusRouter: Router = express.Router();

campusRouter
  .route("/")
  .post(campusController.createCampus)
  .get(campusController.getCampuses);

campusRouter
  .route("/:id")
  .get(campusController.getCampus)
  .patch(campusController.updateCampus)
  .delete(campusController.deleteCampus);

export default campusRouter;
