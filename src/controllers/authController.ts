import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { generateToken } from '../utils/auth';

const authController = {
  signup: async (req: Request, res: Response): Promise<void> => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'An error occurred while signing up' });
    }
  },

  signin: async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        res.status(401).json({ error: 'Invalid credentials' });
        return;
      }

      const token = generateToken({ userId: user._id, role: user.role }, 'your-secret-key', '1h');
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while signing in' });
    }
  }
};

export default authController;
