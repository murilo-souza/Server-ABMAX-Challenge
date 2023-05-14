import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()

app.use(express.json())
app.use(cors());

app.get('/api/rota', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    console.log(response)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao chamar a API');
  }
});

