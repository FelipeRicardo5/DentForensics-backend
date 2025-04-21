import express from 'express';
import { Router } from 'express';
import reportController from '../controllers/reportControllers.js';

const router = Router();

/**
 * @swagger
 * /api/reports:
 *   post:
 *     summary: Criar um novo relatório
 *     tags: [Relatórios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título do relatório
 *               conteudo:
 *                 type: string
 *                 description: Conteúdo detalhado do relatório
 *               peritoResponsavel:
 *                 type: string
 *                 description: Nome do perito responsável pelo relatório
 *               dataCriacao:
 *                 type: string
 *                 format: date-time
 *                 description: Data e hora de criação do relatório (ISO 8601)
 *               casoRelacionado:
 *                 type: string
 *                 description: ID do caso relacionado ao relatório (se houver)
 *             required:
 *               - titulo
 *               - conteudo
 *               - peritoResponsavel
 *               - dataCriacao
 *     responses:
 *       201:
 *         description: Relatório criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       500:
 *         description: Erro ao criar relatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.post("/", reportController.createReport);

/**
 * @swagger
 * /api/reports:
 *   get:
 *     summary: Obter todos os relatórios
 *     tags: [Relatórios]
 *     responses:
 *       200:
 *         description: Lista de todos os relatórios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Report'
 *       500:
 *         description: Erro ao obter relatórios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.get("/", reportController.getAllReports);

/**
 * @swagger
 * /api/reports/{id}:
 *   get:
 *     summary: Obter um relatório por ID
 *     tags: [Relatórios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do relatório a ser obtido
 *     responses:
 *       200:
 *         description: Relatório encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       404:
 *         description: Relatório não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro ao obter relatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.get("/:id", reportController.getReportById);

/**
 * @swagger
 * /api/reports/{id}:
 *   put:
 *     summary: Atualizar um relatório existente
 *     tags: [Relatórios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do relatório a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReportInput'
 *     responses:
 *       200:
 *         description: Relatório atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       404:
 *         description: Relatório não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro ao atualizar relatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.put("/:id", reportController.updateReport);

/**
 * @swagger
 * /api/reports/{id}:
 *   patch:
 *     summary: Atualizar um recurso específico do relatório
 *     tags: [Relatórios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do relatório a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Novo título do relatório (opcional)
 *               conteudo:
 *                 type: string
 *                 description: Novo conteúdo do relatório (opcional)
 *               peritoResponsavel:
 *                 type: string
 *                 description: Novo perito responsável (opcional)
 *               dataCriacao:
 *                 type: string
 *                 format: date-time
 *                 description: Nova data de criação (opcional)
 *               casoRelacionado:
 *                 type: string
 *                 description: Novo ID do caso relacionado (opcional)
 *     responses:
 *       200:
 *         description: Recurso do relatório atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Report'
 *       404:
 *         description: Relatório não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro ao atualizar relatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.patch("/:id", reportController.patchReport);

/**
 * @swagger
 * /api/reports/{id}:
 *   delete:
 *     summary: Deletar um relatório
 *     tags: [Relatórios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do relatório a ser deletado
 *     responses:
 *       200:
 *         description: Relatório deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Relatório não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Erro ao deletar relatório
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *                   description: Detalhes do erro
 */
router.delete("/:id", reportController.deleteReport);

export default router;
