import { Request, Response } from 'express';
import Event from '../models/Event';

const eventController = {
  createEvent: async (req: Request, res: Response) => {
    const event = req.body;
    const newEvent = new Event(event);

    try {
      await newEvent.save();
      res.status(201).json({ message: 'Event created successfully', newEvent });

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the event' });
    }
  },

  getEvent: async (req: Request, res: Response) => {

    try {
      const event = await Event.findById(req.params.eventId);

      if (!event) {
        res.status(404).json({ error: 'Event not found' });
        return;
      }

      res.json({ event });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the event' });
    }
  },

  getAllEvents: async (req: Request, res: Response) => {
    try {
      const events = await Event.find();

      res.json({ events });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the events' });
    }
  },

  updateEvent: async (req: Request, res: Response) => {
    const { eventId } = req.params;
    const event = req.body;

    try {

        if (!Event.findById(eventId)) {
          res.status(404).json({ error: 'Event not found' });
          return;
        }
      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        event,
        { new: true }
      );

      res.json({ message: 'Event updated successfully', event: updatedEvent });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the event' });
    }
  },

  deleteEvent: async (req: Request, res: Response) => {
    const { eventId } = req.params;

    try {
      const event = await Event.findByIdAndDelete(eventId);

      if (!event) {
        res.status(404).json({ error: 'Event not found' });
        return;
      }

      res.json({ message: 'Event deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the event' });
    }
  },
};

export default eventController;
