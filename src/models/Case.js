import e from 'express';
import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({

    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, enum: ['Aberto', 'Em Análise', 'Fechado'], required: true },
    dataAbertura: { type: Date, default: Date.now }, // Formato: YYYY-MM-DD
    dataFechamento: { type: Date },  // Formato: YYYY-MM-DD
    evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],
    relatorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const Case = mongoose.model('Case', caseSchema);

export default Case;