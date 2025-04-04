import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({

  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  peritoResponsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dataCriacao: { type: Date, default: Date.now },
  evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],
  casoRelacionado: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const Report = mongoose.model('Report', reportSchema);

export default Report;