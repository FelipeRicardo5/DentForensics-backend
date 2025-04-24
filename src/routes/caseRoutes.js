import authMidd from '../middlewares/auth.js';
import roleMidd from '../middlewares/authorization.js';
import { Router } from 'express';
import caseController from '../controllers/caseControllers.js';

const router = Router();

// Criar novo caso para um usuário específico
router.post('/usuario/:id', caseController.createCaseByIdUser);

// Obter todos os casos de um usuário
router.get('/usuario/:id/casos', caseController.getAllCasesByUserId);

// Criar um novo caso (Perito)
router.post('/', caseController.createCase);

// Obter todos os casos (todos têm acesso)
router.get('/', caseController.getAllCases);

// Obter um caso por ID
router.get('/caso/:id', caseController.getCaseById);

// Atualizar um caso (Ex: Alterar status) - apenas perito
router.put('/caso/:id', caseController.updateCase);

// Atualizar parte do caso - apenas perito
router.patch('/caso/:id', caseController.patchCase);

// Deletar um caso - apenas perito
router.delete('/caso/:id', caseController.deleteCase);

// Geolocalização de endereço de caso
router.get('/geo/:id', caseController.geocodeAddress);

export default router;
