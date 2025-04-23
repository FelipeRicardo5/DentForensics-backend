import mongoose from 'mongoose';
import formatDatePlugin from '../utils/formatDatePlugin.js';

export const userSchema = new mongoose.Schema({

  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, enum: ['perito', 'admin', 'assistente'], required: true },

  // Campos para reset de senha:
  resetPasswordToken:   { type: String },
  resetPasswordExpires: { type: Date }

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

// Formatando data
userSchema.plugin(formatDatePlugin);


const User = mongoose.model('User', userSchema); 

export default User; 