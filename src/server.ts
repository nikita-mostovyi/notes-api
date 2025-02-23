import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { json } from 'body-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import notesRoutes from './routes/notes.routes'

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

app.use('/v1', notesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Database connected.');

    await prisma.$executeRawUnsafe('SELECT 1');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
}

startServer();
