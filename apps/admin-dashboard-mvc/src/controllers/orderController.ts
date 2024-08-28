// src/controllers/orderController.ts
import { Request, Response } from 'express';
import prisma from '../models/db';

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    });
    res.render('orders', { orders });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createOrder = async (req: Request, res: Response) => {
  const { customerId, orderItems } = req.body;
  try {
    await prisma.order.create({
      data: {
        customerId,
        orderItems: {
          create: orderItems,
        },
      },
    });
    res.redirect('/orders');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
