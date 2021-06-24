import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import greetings from './controllers/greetings.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import auth from './controllers/auth.js';

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', auth);
app.use('/api/v1/greetings', greetings);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
