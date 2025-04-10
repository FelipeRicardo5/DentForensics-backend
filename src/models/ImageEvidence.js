import mongoose from "mongoose";
import formatDatePlugin from '../utils/formatDatePlugin.js';

const imageEvidenceSchema = new mongoose.Schema({

  imagemURL: { type: String, required: true },
  analisadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dataAnalise: { type: Date, default: Date.now },
  evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const ImageEvidence = mongoose.model('ImageEvidence', imageEvidenceSchema);

// Formatando data
imageEvidenceSchema.plugin(formatDatePlugin);


export default ImageEvidence;