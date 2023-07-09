import jwt from 'jsonwebtoken';

const generateToken = (payload: any, secret: string, expiresIn: string): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (token: string, secret: string): any => {
  return jwt.verify(token, secret);
};

export { generateToken, verifyToken };
