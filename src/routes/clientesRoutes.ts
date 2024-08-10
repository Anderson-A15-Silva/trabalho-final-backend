import { Router } from "express";
import { ClientesController } from "../controllers/clientesController";

const router = Router();
router.get('/clientes', ClientesController.getAll);
router.get('/clientes/:id', ClientesController.getById);
router.post('/clientes', ClientesController.create);
router.put('/clientes/:id', ClientesController.update);
router.delete('/clientes/:id', ClientesController.delete);

export default router;