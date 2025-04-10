import mongoose from 'mongoose';
import formatDatePlugin from '../utils/formatDatePlugin.js';

const textEvidenceSchema = new mongoose.Schema({

  conteudo: { type: String, required: true },
  analisadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dataAnalise: { type: Date, default: Date.now },
  evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

// Formatando data
textEvidenceSchema.plugin(formatDatePlugin);


const TextEvidence = mongoose.model('TextEvidence', textEvidenceSchema);

export default TextEvidence; 