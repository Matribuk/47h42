import express, { Request, Response } from 'express';
import app from '../app';

const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
