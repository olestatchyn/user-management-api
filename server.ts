import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import { errorHandlerMiddleware } from './middlewares/error.middleware';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use(errorHandlerMiddleware);

app.listen(port, async () => {
  console.log(`App listening on port: http://localhost:${port}/`);
});