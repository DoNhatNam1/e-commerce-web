// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import prisma from '../models/db';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: { products: true },
    });
    res.render('categories', { categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    await prisma.category.create({
      data: { name },
    });
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
