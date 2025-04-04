import authMidd from '../middlewares/auth.js';
import roleMidd from '../middlewares/authorization.js';
import { Router } from 'express';
import caseController from '../controllers/caseControllers.js';

const router = Router();

// Criar um novo caso (Perito)
router.post('/', authMidd, roleMidd(['perito']), caseController.createCase);

// Obter todos os casos todos tem o acesso
router.get('/', caseController.getAllCases);

// Obter um caso por ID todos tem o acesso
router.get('/:id', caseController.getCaseById);

// Atualizar um caso (Ex: Alterar status) apenas para o perito
router.put('/:id', authMidd, roleMidd(['perito']), caseController.updateCase);

// Deletar um caso (perito)
router.delete('/:id', authMidd, roleMidd(['perito']), caseController.deleteCase);

export default router;
