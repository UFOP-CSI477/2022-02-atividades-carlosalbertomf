import express from 'express';
import cors from 'cors';
import { mainRouter } from './routes/main.js';
import { estadoRouter } from './routes/estado.js';
import { cidadeRouter } from './routes/cidade.js';
import { locaisRouter } from './routes/locais.js';
import { unidadeRouter } from './routes/unidades.js';
import { doacoesRouter } from './routes/doacao.js';
import { produtoRouter } from './routes/produto.js';
import { pessoaRouter } from './routes/pessoas.js';
import { tipoSanguineoRouter } from './routes/tipoSanguineo.js';
import { distribuicoesRouter } from './routes/distribuicoes.js';

const PORT = 4444;

const app = express();
app.use(cors()); // permite request cruzada (da porta 3333 para a 3127 por exemplo)
app.use(express.json()); //utilizacao de JSON

//Routes
app.use(mainRouter); //atribui o mainRouter como parte do objeto do app
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(locaisRouter);
app.use(unidadeRouter);
app.use(doacoesRouter);
app.use(produtoRouter);
app.use(pessoaRouter);
app.use(tipoSanguineoRouter);
app.use(distribuicoesRouter);

//Server - start/listen (npm start)
app.listen(PORT, () => 
{
    console.log(`[SERVER] Server is running on port: ${PORT}`); // servidor "escutando" pela porta 4444 (PORT) e retornar a msg
});