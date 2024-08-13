import express from 'express';
import cadastroRoutes from './routes/cadastrosRoutes';
import clientesRoutes from './routes/clientesRoutes';
import fileirasRoutes from './routes/fileirasRoutes';
import fornecedoresRoutes from './routes/fornecedoresRoutes';
import livrosRoutes from './routes/livrosRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/biblioteca', cadastroRoutes);
app.use('/api/biblioteca', clientesRoutes);
app.use('/api/biblioteca', fileirasRoutes);
app.use('/api/biblioteca', fornecedoresRoutes);
app.use('/api/biblioteca', livrosRoutes);

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em localhost:${PORT}`);
});