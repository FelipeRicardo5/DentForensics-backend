import express from 'express';
import { Router } from 'express';
import evidenceController from '../controllers/evidenceControllers.js';

const router = Router();

// Criar uma nova evidência
router.post('/', evidenceController.createEvidence);

// Obter todas as evidências
router.get('/', evidenceController.getAllEvidences);

// Obter evidência por ID
router.get('/:id', evidenceController.getEvidenceById);

// Atualizar uma evidência
router.put('/:id', evidenceController.updateEvidence);

// Deletar uma evidência
router.delete('/:id', evidenceController.deleteEvidence);

export default router;
