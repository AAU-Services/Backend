import express, { Router } from 'express';
import opportunityController from '../controllers/opportunityController';

const opportunityRouter: Router = express.Router();

opportunityRouter.route('/')
  .post(opportunityController.createOpportunity)
  .get(opportunityController.getAllOpportunities);

opportunityRouter.route('/:opportunityId')
  .get(opportunityController.getOpportunity)
  .put(opportunityController.updateOpportunity)
  .delete(opportunityController.deleteOpportunity);

export default opportunityRouter;
