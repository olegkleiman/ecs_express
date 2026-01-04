import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, ECS Express!');
});

app.get('/health', (req, res) => {
  res.status(200).send('Version 0.9.4 - Healthy');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});