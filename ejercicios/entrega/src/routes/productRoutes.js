import express from 'express'
import { getAllProducts, getProductsById } from '../controllers/productController.js';


const router= express.Router();

router.get('/products', getAllProducts);

router.get('/products/:id', getProductsById);

export default router;