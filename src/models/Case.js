import e from 'express';
import mongoose from 'mongoose';
import formatDatePlugin from '../utils/formatDatePlugin.js';

const caseSchema = new mongoose.Schema({

    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, enum: ['Aberto', 'Em Análise', 'Fechado'], required: true },
    localizacao: { type: String, required: true }, // Localização do caso to passando como required 
    // por que é uma API externa, assim cumprimos um requisito.
    responsavel: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referência ao modelo User
    dataAbertura: { type: Date, default: Date.now }, // Formato: YYYY-MM-DD
    dataFechamento: { type: Date },  // Formato: YYYY-MM-DD
    evidencias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evidence' }],
    relatorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Report' }],

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

// Formatando data
caseSchema.plugin(formatDatePlugin);

const Case = mongoose.model('Case', caseSchema);

export default Case;