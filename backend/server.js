import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// database connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.use('/api/users', userRoutes);

// health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'server running typeshit' });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});