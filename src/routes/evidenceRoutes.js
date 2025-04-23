import express from 'express';
import { Router } from 'express';
import evidenceController from '../controllers/evidenceControllers.js';
import upload from '../middlewares/upload.js';

const router = Router();

// Fazer upload de imagem
router.post('/upload', upload.single('file'), evidenceController.uploadImage);

// Deletar imagem
router.delete('/upload/:id', evidenceController.deleteImage);

// Criar uma nova evidência
router.post('/', evidenceController.createEvidence);

// Obter todas as evidências
router.get('/', evidenceController.getAllEvidences);

// Obter evidência por ID
router.get('/:id', evidenceController.getEvidenceById);

// Atualizar uma evidência
router.put('/:id', evidenceController.updateEvidence);

// Atualizar recurso especifico da evidencia
router.patch('/:id', evidenceController.patchEvidence);

// Deletar uma evidência
router.delete('/:id', evidenceController.deleteEvidence);

export default router;
