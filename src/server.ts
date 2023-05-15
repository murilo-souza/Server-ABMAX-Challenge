import express from "express"
import cors from "cors"
import axios from "axios"

const app = express()

app.use(express.json())
app.use(cors());

app.get('/user', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao chamar a API');
  }
});


app.listen(3333)

