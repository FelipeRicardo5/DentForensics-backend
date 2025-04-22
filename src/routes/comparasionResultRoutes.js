import express from 'express';
import comparisonResultController from '../controllers/comparasionResultControllers.js';
import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: ResultadosComparacao
 *     description: Gerenciamento de resultados de comparação de evidências
 */

/**
 * @swagger
 * /api/comparison:
 *   post:
 *     summary: Cria um novo resultado de comparação
 *     description: Registra um novo resultado de comparação entre evidências.
 *     tags: [ResultadosComparacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - resultado
 *               - precisao
 *               - analisadoPor
 *               - evidenciasEnvolvidas
 *             properties:
 *               resultado:
 *                 type: string
 *                 description: Descrição textual do resultado
 *               precisao:
 *                 type: number
 *                 description: Grau de precisão da comparação (percentual)
 *               analisadoPor:
 *                 type: string
 *                 description: ID do usuário que realizou a análise (ObjectId)
 *               dataAnalise:
 *                 type: string
 *                 format: date-time
 *                 description: Data em que a comparação foi feita
 *               evidenciasEnvolvidas:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs das evidências envolvidas na comparação
 *     responses:
 *       '201':
 *         description: Resultado de comparação criado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/', comparisonResultController.createComparisonResult);

/**
 * @swagger
 * /api/comparison:
 *   get:
 *     summary: Lista todos os resultados de comparação
 *     description: Retorna todos os resultados de comparação armazenados.
 *     tags: [ResultadosComparacao]
 *     responses:
 *       '200':
 *         description: Lista de resultados retornada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/', comparisonResultController.getAllComparisonResults);

/**
 * @swagger
 * /api/comparison/{id}:
 *   get:
 *     summary: Obtém um resultado de comparação pelo ID
 *     description: Retorna os detalhes de um resultado de comparação específico.
 *     tags: [ResultadosComparacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do resultado de comparação
 *     responses:
 *       '200':
 *         description: Resultado encontrado com sucesso.
 *       '404':
 *         description: Resultado não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/:id', comparisonResultController.getComparisonResultById);

/**
 * @swagger
 * /api/comparison/{id}:
 *   put:
 *     summary: Atualiza um resultado de comparação existente
 *     description: Substitui todos os campos de um resultado de comparação (uso completo).
 *     tags: [ResultadosComparacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do resultado a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resultado:
 *                 type: string
 *               precisao:
 *                 type: number
 *               analisadoPor:
 *                 type: string
 *               dataAnalise:
 *                 type: string
 *                 format: date-time
 *               evidenciasEnvolvidas:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Resultado atualizado com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '404':
 *         description: Resultado não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/:id', comparisonResultController.updateComparisonResult);

/**
 * @swagger
 * /api/comparison/{id}:
 *   patch:
 *     summary: Atualiza parcialmente um resultado de comparação
 *     description: Atualiza apenas campos específicos de um resultado de comparação.
 *     tags: [ResultadosComparacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do resultado a ser alterado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               resultado:
 *                 type: string
 *               precisao:
 *                 type: number
 *               dataAnalise:
 *                 type: string
 *                 format: date-time
 *               evidenciasEnvolvidas:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Atualização parcial realizada com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '404':
 *         description: Resultado não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.patch('/:id', comparisonResultController.patchComparisonResult);

/**
 * @swagger
 * /api/comparison/{id}:
 *   delete:
 *     summary: Deleta um resultado de comparação existente
 *     description: Remove um resultado de comparação do sistema.
 *     tags: [ResultadosComparacao]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do resultado a ser removido
 *     responses:
 *       '200':
 *         description: Resultado deletado com sucesso.
 *       '404':
 *         description: Resultado não encontrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/:id', comparisonResultController.deleteComparisonResult);

export default router;