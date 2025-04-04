import mongoose from "mongoose";

const comparisonResultSchema = new mongoose.Schema({

  resultado: { type: String, required: true },
  precisao: { type: Number, required: true },
  analisadoPor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // é uma referência a um usuário que analisou o resultado da comparação obviamente referenciando o modelo User
  dataAnalise: { type: Date, default: Date.now }, 
  evidenciasEnvolvidas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }], // é uma referência a um array de evidências já que podemos ter mais de uma evidência envolvida em uma comparação  

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const ComparisonResult = mongoose.model('ComparisonResult', comparisonResultSchema);

export default ComparisonResult;