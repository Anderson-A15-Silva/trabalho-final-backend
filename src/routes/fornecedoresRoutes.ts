import { Router } from "express";
import { FornecedoresController } from "../controllers/fornecedoresController";

const router = Router();
router.get('/fornecedores', FornecedoresController.getAll);
router.get('/fornecedores/:id', FornecedoresController.getById);
router.post('/fornecedores', FornecedoresController.create);
router.put('/fornecedores/:id', FornecedoresController.update);
router.delete('/fornecedores/:id', FornecedoresController.delete);

export default router;