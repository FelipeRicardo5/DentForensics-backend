import express from 'express';
import { Router } from 'express';
import userController from '../controllers/userControllers.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de Usuários
 */

/**
 * @swagger
 * /api/users/register:
 *  post:
 *      summary: Cadastra usuário
 *      description: Cadastra o usuário ao sistema.
 *      requestBody:
 *          required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    email:
 *                          type: string
 *                          description: Endereço de email do usuário
 *                    senha:
 *                          type: string
 *                          description: Senha do usuário
 *                     nome:
 *                          type: string
 *                          description: Nome completo do usuário
 *                     role:
 *                          type: string
 *                          description: Cargo do usuário (ex: 'admin', 'user')
 *                     responses:
 *                          '201':
 *                              description: Usuário cadastrado com sucesso.
 *                          '400':
 *                              description: Requisição inválida.
 *                          '500':
 *                              description: Erro no servidor.
 */
router.post('/register', userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os usuários
 *     security:
 *       - bearerAuth: []
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/', userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtém um usuário pelo ID
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', userController.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um usuário existente
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:id', userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  patch:
 *  summary: Atualiza um atributo específico de um usuário existente
 *      tags: [Usuários]
 *  parameters:
 *     - in: path
 *      name: id
 *  schema:
 *      type: string
 *      required: true
 *      description: ID do usuário a ser atualizado
 *  requestBody:
 *      required: true
 *  content:
 *      application/json:
 *      schema:
 *      type: object
 *  properties:
 *      nome:
 *          type: string
 *          description: Novo nome do usuário (opcional)
 *      email:
 *          type: string
 *          format: email
 *          description: Novo email do usuário (opcional)
 *      cargo:
 *          type: string
 *          description: Novo cargo do usuário (opcional)
 *  responses:
 *      200:
 *          description: Atributo do usuário atualizado com sucesso
 *      400:
 *          description: Requisição inválida (formato dos dados incorreto, etc.)
 *      404:
 *          description: Usuário não encontrado
 */
router.patch('/:id', userController.patchUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um usuário existente
 *     tags: [Usuários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:id', userController.deleteUser);

export default router;