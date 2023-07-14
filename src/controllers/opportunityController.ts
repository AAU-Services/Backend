import { Request, Response } from 'express';
import Opportunity from '../models/Opportunity';

const opportunityController = {
  createOpportunity: async (req: Request, res: Response) => {
    // const { title, description, date, duration, photo } = req.body;
    const opportunity = req.body;
    const newOpportunity = new Opportunity(opportunity);

    try {
      
      await newOpportunity.save();
      res.status(201).json({ message: 'Opportunity created successfully', opportunity });

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the opportunity' });
    }
  },

  getOpportunity: async (req: Request, res: Response) => {

    const { opportunityId } = req.params;

    try {
      const opportunity = await Opportunity.findById(opportunityId);

      if (!opportunity) {
        res.status(404).json({ error: 'Opportunity not found' });
        return;
      }

      res.json({ opportunity });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the opportunity' });
    }
  },

  getAllOpportunities: async (req: Request, res: Response) => {
    try {
      const opportunities = await Opportunity.find();

      res.json({ opportunities });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the opportunities' });
    }
  },

  updateOpportunity: async (req: Request, res: Response) => {
    const { opportunityId } = req.params;
    const opportunity= req.body;

    try {

        if (!Opportunity.findById(opportunityId)) {
          res.status(404).json({ error: 'Opportunity not found' });
          return;
        }

      const updatedOpportunity = await Opportunity.findByIdAndUpdate(
        opportunityId,
        opportunity,
        { new: true }
      );


      res.json({ message: 'Opportunity updated successfully', opportunity: updatedOpportunity });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the opportunity' });
    }
  },

  deleteOpportunity: async (req: Request, res: Response) => {
    const { opportunityId } = req.params;

    try {
      const opportunity = await Opportunity.findByIdAndDelete(opportunityId);

      if (!opportunity) {
        res.status(404).json({ error: 'Opportunity not found' });
        return;
      }

      res.json({ message: 'Opportunity deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the opportunity' });
    }
  },
};

export default opportunityController;
