import mongoose from 'mongoose';

export const evidenceSchema = new mongoose.Schema({

  tipo: { type: String, enum: ['Imagem', 'Texto'], required: true },
  dataColeta: { type: Date, default: Date.now },
  coletadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao usuário que coletou a evidência

  // Se for tipo "Imagem":
  imagemURL: { type: String },
  publicId: { type: String },

  // Se for tipo "Texto":
  conteudo: { type: String },


  relatorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }], // Referência a relatórios associados à evidência

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const Evidence = mongoose.model('Evidence', evidenceSchema);

export default Evidence;