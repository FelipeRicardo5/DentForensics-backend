import express from 'express';
import comparisonResultController from '../controllers/comparasionResultControllers.js';
import { Router } from 'express';

const router = Router();

// Criar um novo resultado de comparação
router.post('/', comparisonResultController.createComparisonResult);

// Obter todos os resultados de comparação
router.get('/', comparisonResultController.getAllComparisonResults);

// Obter resultado de comparação por ID
router.get('/:id', comparisonResultController.getComparisonResultById);

// Atualizar um resultado de comparação
router.put('/:id', comparisonResultController.updateComparisonResult);

// Deletar um resultado de comparação
router.delete('/:id', comparisonResultController.deleteComparisonResult);

export default router;