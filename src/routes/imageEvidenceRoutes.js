import express from 'express';
import upload from '../middlewares/upload.js';
import imageEvidenceController from '../controllers/imageEvidenceController.js';

const router = express.Router();

//Puxar as fotos
router.get('/', imageEvidenceController.getAllImages);

// Upload de imagem
router.post('/', upload.single('image'), imageEvidenceController.uploadImage);

// Deletar imagem
router.delete('/:id', imageEvidenceController.deleteImage);

export default router;