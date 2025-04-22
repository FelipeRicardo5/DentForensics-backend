import express from 'express';
import upload from '../middlewares/upload.js';
import { Router } from 'express';
import imageEvidenceController from '../controllers/imageEvidenceController.js';

const router = Router();

/**
 * @swagger
 * /api/image-evidence:
 *   get:
 *     summary: Get all image evidence
 *     tags: [Image Evidence]
 *     responses:
 *       200:
 *         description: List of image evidence
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ImageEvidence'
 *       500:
 *         description: Error fetching image evidence
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
router.get('/', imageEvidenceController.getAllImages);

/**
 * @swagger
 * /api/image-evidence:
 *   post:
 *     summary: Upload image evidence
 *     tags: [Image Evidence]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Image file to upload
 *               analisadoPor:
 *                 type: string
 *                 description: ID of the user who analyzed the image
 *               evidencias:
 *                 type: string
 *                 description: Description of the evidence in the image
 *             required:
 *               - image
 *     responses:
 *       201:
 *         description: Image evidence uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ImageEvidence'
 *       500:
 *         description: Error uploading image evidence
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.post('/', upload.single('image'), imageEvidenceController.uploadImage);

/**
 * @swagger
 * /api/image-evidence/{id}:
 *   delete:
 *     summary: Delete image evidence by ID
 *     tags: [Image Evidence]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the image evidence to delete
 *     responses:
 *       200:
 *         description: Image evidence deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *       404:
 *         description: Image evidence not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Not found message
 *       500:
 *         description: Error deleting image evidence
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 */
router.delete('/:id', imageEvidenceController.deleteImage);

export default router;