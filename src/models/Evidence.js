import mongoose from 'mongoose';

export const evidenceSchema = new mongoose.Schema({

  tipo: { type: String, enum: ['Imagem', 'Texto'], required: true },
  dataColeta: { type: Date, default: Date.now },
  coletadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao usuário que coletou a evidência
  relatorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }], // Referência a relatórios associados à evidência
  comparacoes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ComparisonResult' }], // Referência a resultados de comparação associados à evidência

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const Evidence = mongoose.model('Evidence', evidenceSchema);

export default Evidence;