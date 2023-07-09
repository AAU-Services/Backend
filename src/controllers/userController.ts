import { Request, Response } from 'express';
import User from '../models/User';

const userController = {
    getCurrentUser: (req: Request, res: Response): void => {
      const { email, role } = req.user;
      res.json({ email, role });
    },

  getAllUsers: async (_: Request, res: Response): Promise<void> => {
    try {
      const users = await User.find({}, '-password');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching users' });
    }
  },
};

export default userController;
