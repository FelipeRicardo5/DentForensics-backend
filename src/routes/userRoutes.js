import express from 'express';
import { Router } from 'express';
import userController from '../controllers/userControllers.js';

const router = Router();

// Criar um novo usuário (Admin apenas)
router.post('/register', userController.createUser);

// Obter todos os usuários (Admin apenas)
router.get('/', userController.getAllUsers);

// Obter usuário por ID
router.get('/:id', userController.getUserById);

// Atualizar um usuário
router.put('/:id', userController.updateUser);

// Deletar um usuário (Admin apenas)
router.delete('/:id', userController.deleteUser);

export default router;