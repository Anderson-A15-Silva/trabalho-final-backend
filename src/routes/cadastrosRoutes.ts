import { Router } from "express";
import { CadastrosController } from "../controllers/cadastrosController";

const router = Router();
router.get('/cadastros', CadastrosController.getAll);
router.get('/cadastros/:id', CadastrosController.getById);
router.post('/cadastros', CadastrosController.create);
router.put('/cadastros/:id', CadastrosController.update);
router.delete('/cadastros/:id', CadastrosController.delete);

export default router;