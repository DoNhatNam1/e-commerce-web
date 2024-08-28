// src/controllers/productController.ts
import { Request, Response } from 'express';
import prisma from '../models/db';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        orderItems: true,
      },
    });
    res.render('products', { products });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, categoryId } = req.body;
  try {
    await prisma.product.create({
      data: { name, price, categoryId },
    });
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
