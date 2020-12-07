import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import Tomato from './models/tomatoModel.js';

dotenv.config({ path: './.env' });

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is on');
});

app.get('/all', async (req, res) => {
  try {
    const allTomatoes = await Tomato.find();
    res.status(201).json(allTomatoes);
  } catch (error) {
    console.log(error);
  }
});

app.post('/addtomato', async (req, res) => {
  const { item } = req.body;
  const one = await Tomato.create({
    item,
    done: false,
  });

  if (one) {
    res.status(201).json({ message: 'Created' });
  } else {
    res.status(400);
    throw new Error('Not created');
  }
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running -- ${process.env.NODE_ENV} -- ${PORT}`.yellow.bold
  )
);
