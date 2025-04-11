import cloudinary from '../config/cloudinary.js';
import ImageEvidence from '../models/ImageEvidence.js';
import streamifier from 'streamifier'; // Para stream do buffer


const getAllImages = async (req, res) => {
    try {
      const images = await ImageEvidence.find().populate('analisadoPor'); // popula se tiver ref
      res.status(200).json(images);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
      res.status(500).json({ error: 'Erro ao buscar imagens' });
    }
  };

export const uploadImage = async (req, res) => {
  try {
    const { analisadoPor, evidencias } = req.body;

    const streamUpload = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'dontforensic' },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await streamUpload();

    const newImage = await ImageEvidence.create({
        imagemURL: result.secure_url,
        publicId: result.public_id, 
        analisadoPor,
        evidencias,
      });

    res.status(201).json(newImage);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no upload de imagem' });
  }
};

export const deleteImage = async (req, res) => {
    try {
      const { id } = req.params;
  
      const image = await ImageEvidence.findById(id);
      if (!image) return res.status(404).json({ message: 'Imagem não encontrada' });
  
      // Deleta do Cloudinary
      await cloudinary.uploader.destroy(image.publicId);
  
      // Deleta do MongoDB
      await ImageEvidence.findByIdAndDelete(id);
  
      res.status(200).json({ message: 'Imagem deletada com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao deletar imagem' });
    }
  };


  export default {getAllImages, uploadImage, deleteImage}
