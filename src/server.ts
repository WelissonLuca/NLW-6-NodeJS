import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('ola')
})

app.listen( 3333, () => console.log('server is running'))