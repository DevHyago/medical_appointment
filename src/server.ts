import express from 'express';
import userRouter from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/', userRouter);

app.get('/', (request, response) => {
   return response.json({message: 'Hello Word'});
});

app.listen(3000, () => {
   console.log('Server started on port 3000');
});