import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({

  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  role: { type: String, enum: ['perito', 'admin', 'assistente'], required: true },

}, { timestamps: true }); // timestamps: true adiciona createdAt e updatedAt automaticamente 

const User = mongoose.model('User', userSchema); 

export default User; 