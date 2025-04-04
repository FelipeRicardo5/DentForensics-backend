import express from 'express';
import { Router } from 'express';
import authController from '../controllers/authControllers.js';

const router = Router();

// Login do usuário
router.post('/login', authController.login);

// Logout do usuário
router.post('/logout', authController.logout);

export default router;
