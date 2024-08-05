import { Request, Response, NextFunction } from 'express';

export const errorHandlerMiddleware = (err, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    const code = err.code || 500;
    let message = err.message || 'Internal Server Error';

    res.status(code).json({ message, code });
  }
  next();
};