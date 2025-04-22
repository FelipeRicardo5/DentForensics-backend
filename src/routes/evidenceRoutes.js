import express from 'express';
import { Router } from 'express';
import evidenceController from '../controllers/evidenceControllers.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Evidências
 *     description: Gerenciamento de evidências
 */

/**
 * @swagger
 * /api/evidences:
 *   post:
 *     summary: Cria uma nova evidência
 *     description: Registra uma nova evidência coletada.
 *     tags: [Evidências]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tipo
 *               - coletadoPor
 *             properties:
 *               tipo:
 *                 type: string
 *                 description: Tipo da evidência
 *                 enum: [Imagem, Texto]
 *               dataColeta:
 *                 type: string
 *                 format: date
 *                 description: Data em que a evidência foi coletada (YYYY-MM-DD)
 *               coletadoPor:
 *                 type: string
 *                 description: ID do usuário que coletou a evidência (ObjectId)
 *               relatorios:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos relatórios associados
 *               comparacoes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: IDs dos resultados de comparação associados
 *     responses:
 *       '201':
 *         description: Evidência criada com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/', evidenceController.createEvidence);

/**
 * @swagger
 * /api/evidences:
 *   get:
 *     summary: Lista todas as evidências
 *     description: Retorna todas as evidências registradas.
 *     tags: [Evidências]
 *     responses:
 *       '200':
 *         description: Lista de evidências retornada com sucesso.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/', evidenceController.getAllEvidences);

/**
 * @swagger
 * /api/evidences/{id}:
 *   get:
 *     summary: Obtém uma evidência por ID
 *     description: Retorna os detalhes de uma evidência específica.
 *     tags: [Evidências]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da evidência
 *     responses:
 *       '200':
 *         description: Evidência encontrada com sucesso.
 *       '404':
 *         description: Evidência não encontrada.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/:id', evidenceController.getEvidenceById);

/**
 * @swagger
 * /api/evidences/{id}:
 *   put:
 *     summary: Atualiza uma evidência existente
 *     description: Substitui todos os campos de uma evidência pelo payload enviado.
 *     tags: [Evidências]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da evidência a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 enum: [Imagem, Texto]
 *               dataColeta:
 *                 type: string
 *                 format: date
 *               coletadoPor:
 *                 type: string
 *               relatorios:
 *                 type: array
 *                 items:
 *                   type: string
 *               comparacoes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Evidência atualizada com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '404':
 *         description: Evidência não encontrada.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/:id', evidenceController.updateEvidence);

/**
 * @swagger
 * /api/evidences/{id}:
 *   patch:
 *     summary: Atualiza parcialmente uma evidência
 *     description: Atualiza apenas campos específicos de uma evidência.
 *     tags: [Evidências]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da evidência a ser alterada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 enum: [Imagem, Texto]
 *               dataColeta:
 *                 type: string
 *                 format: date
 *               relatorios:
 *                 type: array
 *                 items:
 *                   type: string
 *               comparacoes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Evidência parcialmente atualizada com sucesso.
 *       '400':
 *         description: Requisição inválida.
 *       '404':
 *         description: Evidência não encontrada.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.patch('/:id', evidenceController.patchEvidence);

/**
 * @swagger
 * /api/evidences/{id}:
 *   delete:
 *     summary: Deleta uma evidência existente
 *     description: Remove uma evidência do sistema.
 *     tags: [Evidências]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da evidência a ser removida
 *     responses:
 *       '200':
 *         description: Evidência deletada com sucesso.
 *       '404':
 *         description: Evidência não encontrada.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/:id', evidenceController.deleteEvidence);

export default router;
