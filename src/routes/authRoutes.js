import express from 'express';
import { Router } from 'express';
import authController from '../controllers/authControllers.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Autenticação
 *     description: Endpoints de login e logout
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autentica um usuário
 *     description: Realiza login do usuário usando email e senha, retornando um token JWT.
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email do usuário
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do usuário
 *     responses:
 *       '200':
 *         description: Login realizado com sucesso. Retorna o token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *       '400':
 *         description: Email ou senha inválidos.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/login', authController.login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Realiza logout do usuário
 *     description: Invalida o token no cliente (não armazena nada no servidor).
 *     tags: [Autenticação]
 *     responses:
 *       '200':
 *         description: Logout efetuado com sucesso.
 */
router.post('/logout', authController.logout);

export default router;
