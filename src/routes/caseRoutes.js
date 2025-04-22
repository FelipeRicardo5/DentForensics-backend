import authMidd from '../middlewares/auth.js';
import roleMidd from '../middlewares/authorization.js';
import { Router } from 'express';
import caseController from '../controllers/caseControllers.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Casos
 *     description: Gerenciamento de casos periciais
 */

/**
 * @swagger
 * /api/cases:
 *   post:
 *     summary: Cria um novo caso
 *     description: Cria um novo caso pericial (apenas perito)
 *     tags: [Casos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [titulo, descricao, status]
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título do caso
 *               descricao:
 *                 type: string
 *                 description: Descrição detalhada do caso
 *               status:
 *                 type: string
 *                 description: Status do caso
 *                 enum: [Aberto, "Em Análise", Fechado]
 *               dataAbertura:
 *                 type: string
 *                 format: date
 *                 description: Data de abertura (YYYY-MM-DD)
 *               dataFechamento:
 *                 type: string
 *                 format: date
 *                 description: Data de fechamento (YYYY-MM-DD)
 *               evidencias:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs das evidências relacionadas
 *               relatorios:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos relatórios relacionados
 *     responses:
 *       '201':
 *         description: Caso criado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '401':
 *         description: Não autorizado.
 */
router.post('/', authMidd, roleMidd(['perito']), caseController.createCase);

/**
 * @swagger
 * /api/cases:
 *   get:
 *     summary: Lista todos os casos
 *     description: Retorna todos os casos periciais (acesso livre)
 *     tags: [Casos]
 *     responses:
 *       '200':
 *         description: Lista de casos retornada com sucesso.
 */
router.get('/', caseController.getAllCases);

/**
 * @swagger
 * /api/cases/{id}:
 *   get:
 *     summary: Obtém um caso por ID
 *     description: Retorna os detalhes de um caso específico
 *     tags: [Casos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso
 *     responses:
 *       '200':
 *         description: Caso encontrado e retornado com sucesso.
 *       '404':
 *         description: Caso não encontrado.
 */
router.get('/:id', caseController.getCaseById);

/**
 * @swagger
 * /api/cases/{id}:
 *   put:
 *     summary: Atualiza um caso existente
 *     description: Atualiza todos os campos de um caso (apenas perito)
 *     tags: [Casos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Aberto, "Em Análise", Fechado]
 *               dataAbertura:
 *                 type: string
 *                 format: date
 *               dataFechamento:
 *                 type: string
 *                 format: date
 *               evidencias:
 *                 type: array
 *                 items:
 *                   type: string
 *               relatorios:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Caso atualizado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '401':
 *         description: Não autorizado.
 *       '404':
 *         description: Caso não encontrado.
 */
router.put('/:id', authMidd, roleMidd(['perito']), caseController.updateCase);

/**
 * @swagger
 * /api/cases/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um caso existente
 *     description: Atualiza apenas alguns campos de um caso (apenas perito)
 *     tags: [Casos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [Aberto, "Em Análise", Fechado]
 *                 description: Novo status do caso
 *     responses:
 *       '200':
 *         description: Caso parcialmente atualizado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '401':
 *         description: Não autorizado.
 *       '404':
 *         description: Caso não encontrado.
 */
router.patch('/:id', authMidd, roleMidd(['perito']), caseController.patchCase);

/**
 * @swagger
 * /api/cases/{id}:
 *   delete:
 *     summary: Deleta um caso existente
 *     description: Remove um caso do sistema (apenas perito)
 *     tags: [Casos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do caso a ser deletado
 *     responses:
 *       '200':
 *         description: Caso deletado com sucesso.
 *       '401':
 *         description: Não autorizado.
 *       '404':
 *         description: Caso não encontrado.
 */
router.delete('/:id', authMidd, roleMidd(['perito']), caseController.deleteCase);

export default router;

