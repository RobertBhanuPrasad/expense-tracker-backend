import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { connectDB } from './db.js';
import expenseRoutes from './routes/expenseRoutes.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);

app.get('/', (req, res) => {
  res.send('Expense Tracker API');
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
