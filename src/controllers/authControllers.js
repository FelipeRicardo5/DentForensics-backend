import User from '../models/User.js'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

export const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email }); // Procura o usuário no banco de dados
    // if (user.senha) {
    //   return console.log(user.senha); // Retorna erro se o usuário não for encontrado ou se a senha não existir 
    // }
    if (!user) {
      return res.status(400).json({ message: 'Email inválido' }); // Retorna erro se o usuário não for encontrado
    }
    const isMatch = await bcrypt.compare(senha, user.senha); // Compara a senha fornecida com a senha do usuário ERRO 
    if (!isMatch) { 
      return res.status(400).json({ message: 'Senha inválida' }); // Retorna erro se a senha não for igual o ideal seria colocar pra ambos, assim, não expõe o que está errado.
    }

    const generatingToken = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Gera um token
    const token = generatingToken; // Armazena o token
    res.status(200).json({ token }); // Retorna o token
  } catch (error) { // Retorna erro se houver algum problema
    res.status(500).json({ message: 'Erro ao fazer login', error }); 
  }
};

// Função de logout (simplesmente invalida o token no cliente)
export const logout = (req, res) => { 
  res.status(200).json({ message: 'Logout realizado com sucesso' }); 
};

// Função de verificação do token (Middleware de Autorização) que serve para proteger rotas!!!!
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Pega o token do cabeçalho
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' }); // Retorna erro se o token não for fornecido
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Falha na autenticação' }); // Retorna erro se houver falha na autenticação
    }
    req.userId = decoded.id;  // Armazena o ID do usuário no req
    req.userRole = decoded.role; // Armazena o papel do usuário no req
    next();
  });
};

export default { login, logout, verifyToken };