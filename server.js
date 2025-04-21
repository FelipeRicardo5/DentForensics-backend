import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import app from './app.js';
import Loaders from "./src/loaders/startDb.js";


app.use(express.json());
<<<<<<< HEAD
=======
const corsOptions ={
    origin:'http://localhost:3000/dashboard', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
>>>>>>> f2a3d7b43d053330c78a79b7364ab4a9591c1ba6

app.get('/', (req, res) => {
    res.send('Servidor em funcionamento!');
});

async function startServer() {
    await Loaders.start();
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

startServer();

// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => console.log('Conectado ao MongoDB'))
//     .catch(err => console.error('Erro de conexão com o MongoDB:', err));
