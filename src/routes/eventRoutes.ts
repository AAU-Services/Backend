import express, { Router } from 'express';
import eventController from '../controllers/eventController';

const eventRouter: Router = express.Router();

eventRouter.route('/')
  .post(eventController.createEvent)
  .get(eventController.getAllEvents);

eventRouter.route('/:eventId')
  .get(eventController.getEvent)
  .put(eventController.updateEvent)
  .delete(eventController.deleteEvent);

export default eventRouter;