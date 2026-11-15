import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productsRouter.js';
import { login } from './src/controllers/authControllers.js';
import { authentication } from './src/middlewares/authentication.js';
import categoriesRouter from './src/routes/categoriesRouter.js';

console.log('Router cargado:', categoriesRouter); 


const app = express();
const PORT = 3007;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use((req, res, next) => {
  console.log(`${req.url} ${req.method}`);
  next();
});

app.use(express.json());
app.post('/api/login', login);
app.use('/auth', authentication, productsRouter);
app.use('/categories', authentication, categoriesRouter);


// 404 (SIEMPRE al final, antes del listen)
app.use((req, res) => {
  res.status(404).json({
    error: "404. Ruta no encontrada",
    message: `El recurso ${req.url} no existe`
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});   