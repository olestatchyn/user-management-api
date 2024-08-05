import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.listen(port, async () => {
  console.log(`App listening on port: http://localhost:${port}/`);
});