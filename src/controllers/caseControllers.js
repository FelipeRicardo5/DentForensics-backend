import Case from '../models/Case.js';

export const createCase = async (req, res) => {
  try {
    const { titulo, descricao, status, dataAbertura, dataFechamento } = req.body;
    const newCase = new Case({ titulo, descricao, status, dataAbertura, dataFechamento });
    await newCase.save();
    res.status(201).json(newCase);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o caso', error });
  }
};

export const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter casos', error });
  }
};

export const getCaseById = async (req, res) => {
  try {
    const caso = await Case.findById(req.params.id);
    if (!caso) {
      return res.status(404).json({ message: 'Caso não encontrado' });
    }
    res.status(200).json(caso);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter caso', error });
  }
};

export const updateCase = async (req, res) => {
  try {
    const caso = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!caso) {
      return res.status(404).json({ message: 'Caso não encontrado' });
    }
    res.status(200).json(caso);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar caso', error });
  }
};

export const deleteCase = async (req, res) => {
  try {
    const caso = await Case.findByIdAndDelete(req.params.id);
    if (!caso) {
      return res.status(404).json({ message: 'Caso não encontrado' });
    }
    res.status(200).json({ message: 'Caso deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar caso', error });
  }
};

export default { createCase, getAllCases, getCaseById, updateCase, deleteCase };