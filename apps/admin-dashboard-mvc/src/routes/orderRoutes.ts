// src/routes/orderRoutes.ts
import { Router } from 'express';
import { getAllOrders, createOrder } from '../controllers/orderController';

const router = Router();

router.get('/orders', getAllOrders);
router.post('/orders', createOrder);

export default router;
