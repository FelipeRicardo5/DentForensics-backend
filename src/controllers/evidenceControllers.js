import Evidence from '../models/Evidence.js';

export const createEvidence = async (req, res) => {
  try {
    const { tipo, dataColeta, coletadoPor } = req.body;
    const newEvidence = new Evidence({ tipo, dataColeta, coletadoPor });
    await newEvidence.save();
    res.status(201).json(newEvidence);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar evidência', error });
  }
};

export const getAllEvidences = async (req, res) => {
  try {
    const evidences = await Evidence.find();
    res.status(200).json(evidences);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter evidências', error });
  }
};

export const getEvidenceById = async (req, res) => {
  try {
    const evidence = await Evidence.findById(req.params.id);
    if (!evidence) {
      return res.status(404).json({ message: 'Evidência não encontrada' });
    }
    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter evidência', error });
  }
};

export const updateEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evidence) {
      return res.status(404).json({ message: 'Evidência não encontrada' });
    }
    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar evidência', error });
  }
};

export const patchEvidence = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const evidence = await Evidence.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!evidence) {
      return res.status(404).json({ message: 'Evidência não encontrada' });
    }

    res.status(200).json(evidence);
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao atualizar evidência',
      error: error.message,
    });
  }
};

export const deleteEvidence = async (req, res) => {
  try {
    const evidence = await Evidence.findByIdAndDelete(req.params.id);
    if (!evidence) {
      return res.status(404).json({ message: 'Evidência não encontrada' });
    }
    res.status(200).json({ message: 'Evidência deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar evidência', error });
  }
};

export default { createEvidence, getAllEvidences, getEvidenceById, updateEvidence, patchEvidence, deleteEvidence };