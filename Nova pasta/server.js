const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Configura��o do servidor
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/rifa', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar ao MongoDB: ', err));

// Definindo o modelo para os n�meros marcados
const NumeroSchema = new mongoose.Schema({
  numero: String,
  usuario: String,
  data: { type: Date, default: Date.now }
});

const Numero = mongoose.model('Numero', NumeroSchema);

// Rota para marcar um n�mero
app.post('/marcar-numero', (req, res) => {
  const { numero, usuario } = req.body;

  const novoNumero = new Numero({
    numero,
    usuario
  });

  novoNumero.save()
    .then(() => res.status(200).send('N�mero marcado com sucesso!'))
    .catch((err) => res.status(400).send('Erro ao marcar n�mero: ' + err));
});

// Rota para listar todos os n�meros marcados
app.get('/numeros-marcados', (req, res) => {
  Numero.find()
    .then(numeros => res.status(200).json(numeros))
    .catch((err) => res.status(400).send('Erro ao buscar n�meros marcados: ' + err));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
