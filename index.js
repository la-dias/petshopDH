const express = require('express');
const app = express();
const consign = require('consign');
const cors = require('cors');

app.use(cors());
app.use(express.json());

consign().include('./api').then('./routes').into(app);

app.listen(3001, () => {
  console.log('Rodando Servidor');
});
