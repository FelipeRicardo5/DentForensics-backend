import mongoose from "mongoose";
import formatDatePlugin from '../utils/formatDatePlugin.js';

const imageEvidenceSchema = new mongoose.Schema({

  imagemURL: { type: String, required: true },
  publicId: { type: String, required: true },
  analisadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dataAnalise: { type: Date, default: Date.now },
  evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

// Formatando data
imageEvidenceSchema.plugin(formatDatePlugin);

const ImageEvidence = mongoose.model('ImageEvidence', imageEvidenceSchema);

export default ImageEvidence;