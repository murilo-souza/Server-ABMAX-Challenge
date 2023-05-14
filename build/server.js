var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();
app.use(express.json());
app.use(cors());
app.get('/api/rota', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get('https://swapi.dev/api/people/');
        console.log(response);
        res.json(response.data);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erro ao chamar a API');
    }
}));
